require("dotenv").config();
const express = require("express");
const connectDB = require("./pages/dbconnection");
const mongodb = require("mongodb");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

/// get all novels from database
app.get("/", async (req, res) => {
  try {
    const db = await connectDB();
    const novels = db.collection("novels");
    const data = await novels.find({}).toArray();
    res.send(data);
  } catch (error) {
    res.status(500).send("Error getting data");
  }
});

/// when admin add nobel
app.post("/addnobel", async(req, res) => {
    try {
        const {author, image, paragraph, price, name} = req.body;
        
        const db = await connectDB();
        const novels = db.collection("novels");
        
        const result = await novels.insertOne({author, image, paragraph, price, name});
        res.send({_id: result.insertedId, author, image, paragraph, price, name});
        console.log(author, image, paragraph, price, name);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding novel");
    }
});

/// when admin delete nobel
app.delete("/deletenobel/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const db = await connectDB();
    const novels = db.collection("novels");
    const result = await novels.deleteOne({ _id: new mongodb.ObjectId(id) });
    if (result.deletedCount === 1) {
      res.send({ message: "Novel deleted successfully" });
    } else {
      res.status(404).send({ message: "Novel not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting novel");
  }
});

/// when user buy a nobel
app.post("/buynovel", async (req, res) => {
  try {
    const { userId, novelId } = req.body;
    
    const db = await connectDB();
    const users = db.collection("users");
    const result = await users.updateOne(
      { _id: new mongodb.ObjectId(userId) },
      { $addToSet: { purchasedNovels: new mongodb.ObjectId(novelId) } }
    );
    
    if (result.modifiedCount === 1) {
      res.send({ 
        success: true, 
        message: "Novel purchased successfully!" 
      });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error purchasing novel");
  }
});

/// create new user
app.post("/addusers", async (req, res) => {
  try {
    const { name, email } = req.body;
    const db = await connectDB();
    const users = db.collection("users");
    const existingUser = await users.findOne({ email: email });
    if (existingUser) {
      return res.status(400).send({ message: "User already exists" });
    }
    const result = await users.insertOne({ name, email, purchasedNovels: [] });
    res.send({ _id: result.insertedId, name, email, purchasedNovels: [] });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating user");
  }
});

app.get("/users", async (req, res) => {
  try {
    const db = await connectDB();
    const users = db.collection("users");
    const data = await users.find({}).toArray();
    res.send(data);
  } catch (error) {
    res.status(500).send("Error getting users");
  }
});

app.put("/updatenovel/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;
    const db = await connectDB();
    const novels = db.collection("novels");
    const result = await novels.updateOne(
      { _id: new mongodb.ObjectId(id) },
      { $set: { price: price } }
    );
    if (result.modifiedCount === 1) {
      res.send({ message: "Novel price updated successfully" });
      console.log("Novel price updated successfully");
    }
    else {
      res.status(404).send({ message: "Novel not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating novel price");
  }
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});

//app.js backend