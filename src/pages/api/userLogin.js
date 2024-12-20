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
      await mongo.close(); // Closing Mongo
      res.status(401).json({ message: "User Not Exists" });
    } else {
      if (findingData.password === bodyObject.password) {
        await mongo.close(); // Closing Mongo
        res.status(200).json({ ...findingData, password: "" });
      } else {
        await mongo.close(); // Closing Mongo
        res.status(401).json({ message: "Email or Password is wrong" });
      }
    }
  }
}
