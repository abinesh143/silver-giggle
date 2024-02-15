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
    const findingData = await db
      .collection("metadata")
      .findOne({ userEmail: bodyObject.userEmail });
    if (!findingData) {
      await db.collection("metadata").insertOne(bodyObject);
      res.status(201).json({ message: "Success" });
    } else {
      await db
        .collection("metadata")
        .replaceOne({ userEmail: bodyObject.userEmail }, { ...bodyObject });
      res.status(201).json({ message: "Success" });
    }
    await mongo.close();
  } else if (req.method === "GET") {
    const client = await mongo.connect();
    const db = client.db("app-maker-pro");
    const data = await db
      .collection("metadata")
      .findOne({ userEmail: req.query.email });
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "not found" });
    }
  }
}
