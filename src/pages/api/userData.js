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
      .collection("users")
      .findOne({ userEmail: bodyObject.userEmail });
    if (!findingData) {
      await db.collection("users").insertOne(bodyObject);

      await mongo.close(); // Closing Mongo
      res.status(200).json({ ...bodyObject, password: "" });
    } else {
      await mongo.close(); // Closing Mongo
      res.status(401).json({ message: "Already User Exists" });
    }
  } else if (req.method === "PATCH") {
    const bodyObject = JSON.parse(req.body);
    const client = await mongo.connect();
    const db = client.db("app-maker-pro");
    await db
      .collection("users")
      .updateOne(
        { userEmail: bodyObject.userEmail },
        { $set: { isPremium: bodyObject.isPremium, amount: bodyObject.amount } }
      );

    await mongo.close(); // Closing Mongo
    res.status(200).json({ message: "success" });
  }
}
