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
      .collection("review")
      .findOne({ userEmail: bodyObject.userEmail });
    if (!findingData) {
      await db.collection("review").insertOne(bodyObject);

      await mongo.close(); // Closing Mongo
      res.status(200).json({ message: "Success" });
    } else {
      await mongo.close(); // Closing Mongo
      res.status(401).json({ message: "Review Request Already Submitted" });
    }
  }
}
