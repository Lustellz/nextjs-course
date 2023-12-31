// this would only runs on backend server

// /api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === "POST") {
        // POST /api/new-meetup
        const data = req.body;

        const client = await MongoClient.connect(
            "mongodb+srv://admin:reactStudy.@reactnextjsproject.yrtvevr.mongodb.net/?retryWrites=true&w=majority"
        );

        const db = client.db();

        const meetupsCollection = db.collection("meetups");

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: "Meetup inserted!" });
    }
}

export default handler;
