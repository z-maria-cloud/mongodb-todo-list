import { MongoClient } from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1:27017/");
let database = client.db(process.env.DB_NAME)
const notes = database.collection(process.env.DB_COLLECTION_NAME)
const allNotes = await notes.find({}).toArray();
console.log(allNotes)

import "dotenv/config";

import express from "express";
const app = express();
const port = process.env.PROJECT_PORT;
const appName = process.env.PROJECT_NAME;

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.send("hello world")
});

app.listen(port, () => {
  if (process.env.NODE_ENV === "production") {
    console.log("SMILE! you're in production");
  }
  console.log(`${appName} is listening on port ${port}`);
});

