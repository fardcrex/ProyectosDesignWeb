"use strict";
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

//models
const Note = require("./Note");

//connect server to mongoDB

+mongoose.connect("mongodb://localhost:27017/simple_blog", {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error:")
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// retrieves all the notes
app.get("/api/note/list", (req, res) => {
  Note.find({})
    .sort({ updatedAt: "descending" })
    .exec((err, notes) => {
      if (err) return res.status(404).send("Error while getting notes!");
      return res.send({ notes });
    });
});

// create a new note
app.post("/api/note/create", (req, res) => {
  const note = new Note({ body: req.body.body, title: req.body.title });
  note.save(err => {
    if (err) return res.status(404).send({ message: err.message });
    return res.send({ note });
  });
});

// update an existing note with the given object id
app.post("/api/note/update/:id", (req, res) => {
  let options = { new: true };
  Note.findByIdAndUpdate(req.params.id, req.body.data, options, (err, note) => {
    if (err) return res.status(404).send({ message: err.message });
    return res.send({ message: "note updated!", note });
  });
});

// delete an existing note with the given object id
app.post("/api/note/delete/:id", (req, res) => {
  Note.findByIdAndRemove(req.params.id, err => {
    if (err) return res.status(404).send({ message: err.message });
    return res.send({ message: "note deleted!" });
  });
});

const PORT = 5000;
app.listen(PORT);
console.log("api runnging on port " + PORT + ": ");
