import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://admin:admin123@cluster0.glemluw.mongodb.net/?retryWrites=true&w=majority";

const mongo = new MongoClient(uri);

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

      await mongo.close(); // Closing Mongo
      res.status(201).json({ message: "Success" });
    } else {
      delete bodyObject._id;
      await db
        .collection("metadata")
        .replaceOne({ userEmail: bodyObject.userEmail }, { ...bodyObject });

      await mongo.close(); // Closing Mongo
      res.status(201).json({ message: "Success" });
    }
  } else if (req.method === "GET") {
    const client = await mongo.connect();
    const db = client.db("app-maker-pro");
    const data = await db
      .collection("metadata")
      .findOne({ userEmail: req.query.email });

    await mongo.close(); // Closing Mongo
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "not found" });
    }
  }
}
