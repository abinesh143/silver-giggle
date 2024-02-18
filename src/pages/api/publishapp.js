import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://admin:admin123@cluster0.glemluw.mongodb.net/?retryWrites=true&w=majority";
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const mongo = new MongoClient(uri, options);

export default async function handler(req, res) {
  if (req.method === "POST") {
    let bodyObject = JSON.parse(req.body);
    const client = await mongo.connect();
    const db = client.db("app-maker-pro");
    const existingData = await db
      .collection("publishapp")
      .findOne({ userEmail: bodyObject.userEmail });
    if (!existingData) {
      await db.collection("publishapp").insertOne(bodyObject);

      res.status(200).json({ message: "Publish Request Submitted" });
    } else {
      if (bodyObject.andriodReq) {
        await db.collection("publishapp").updateOne(
          { userEmail: bodyObject.userEmail },
          {
            $set: {
              andriodReq: bodyObject.andriodReq,
              andriodStatus: bodyObject.andriodStatus,
            },
          }
        );
      }
      if (bodyObject.iosReq) {
        await db.collection("publishapp").updateOne(
          { userEmail: bodyObject.userEmail },
          {
            $set: {
              iosReq: bodyObject.iosReq,
              iosStatus: bodyObject.iosStatus,
            },
          }
        );
      }

      await mongo.close(); // Closing Mongo
      res.status(200).json({ message: "Publish Request Updated" });
    }
  } else if (req.method === "GET") {
    const client = await mongo.connect();
    const db = client.db("app-maker-pro");
    const data = await db
      .collection("publishapp")
      .findOne({ userEmail: req.query.email });

    await mongo.close(); // Closing Mongo
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "not found" });
    }
  }
}
