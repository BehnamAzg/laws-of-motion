// let http = require('http')
// let ourApp = http.createServer(function(req, res) {
//   res.end('Hello')
// })
// ourApp.listen(3000)

let express = require("express");
// import express from "express";
// import { MongoClient } from "mongodb";
let { MongoClient } = require("mongodb");

let app = express();
let db;

async function go() {
  let client = new MongoClient(
    "mongodb+srv://behnamazg:x46ELXX69E0p6ANt@cluster0.2vmgy.mongodb.net/SchedulesTable?retryWrites=true&w=majority&appName=Cluster0",
  );
  await client.connect();
  db = client.db();
  app.listen(3000);
}
go();

// let table = require("./table");
// import { table as backEndTable } from "./table.js";
export let table;

app.use(express.urlencoded({ extended: false }));

app.get("/", async function (req, res) {
  let dbTable = await db.collection("schedules").find().toArray();
  table = dbTable
    .map(function (item) {
      return item.table;
    })
    .join("");
  console.log(table);
  res.send(table);
});

await module.exports = table;

// app.post("/", async function (req, res) {
//   // await db.collection("schedules").insertOne({ test: "this is a test" });
// });
