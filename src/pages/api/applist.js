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
    let findingData = await db
      .collection("applist")
      .findOne({ userEmail: bodyObject.userEmail });
    if (!findingData) {
      findingData = await db.collection("applist").findOne({ website: "" });
    }

    if (findingData) {
      await db.collection("applist").updateOne(
        { secretCode: findingData["secretCode"] },
        {
          $set: {
            website: bodyObject.website,
            userEmail: bodyObject.userEmail,
          },
        }
      );
      res.status(200).json({ message: "Success" });
    } else {
      res.status(404).json({ message: "Not Found" });
    }

    await mongo.close(); // Closing Mongo
  } else if (req.method === "GET") {
    const client = await mongo.connect();
    const db = client.db("app-maker-pro");
    const data = await db
      .collection("applist")
      .findOne({ userEmail: req.query.email });
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "not found" });
    }

    await mongo.close(); // Closing Mongo
  }
}
