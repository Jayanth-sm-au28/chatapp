// utils/db.js
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://Jay:Manikanta@cluster0.os5ljyi.mongodb.net/chat?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    return client.db("your_database_name");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

export { connectToDatabase };
