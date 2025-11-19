import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(process.env.DB_ADDRESS);
let database = client.db(process.env.DB_NAME);
const notes = database.collection(process.env.DB_COLLECTION_NAME);

import "dotenv/config";

import express from "express";
const app = express();
const port = process.env.PROJECT_PORT;
const appName = process.env.PROJECT_NAME;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const allNotes = await notes.find({}).sort({"timestamp": -1 }).toArray();
  res.render("home.ejs", { notes: allNotes });
});

app.get("/delete/:del", async (req, res) => {
  let deleteId = req.params.del;
  let deleteThisId = await notes.deleteOne({ _id: new ObjectId(deleteId) })
  res.redirect("/");
});

app.post("/new-note", async (req, res) => {
  let newNote = await notes.insertOne({
    "title": req.body.title,
    "priority": req.body.priority,
    "content": req.body.content,
    "timestamp": Date.now(),
  });
  res.redirect("/");
});

app.listen(port, () => {
  if (process.env.NODE_ENV === "production") {
    console.log("SMILE! you're in production");
  }
  console.log(`${appName} is listening on port ${port}`);
});
