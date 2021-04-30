"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const PORT = 4000;

const itemData = require("./data/items.json");
const { ItemsData, updateInventory } = require("./itemsData.js");

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints?
//GET all the items
  .get("/item", (req, res) => res.status(200).json({ item: itemData }))
  //GET item by id
  .get("/item/:_id", ItemsData)

  //POST to update inventory when purchased
  .post("/purchase", updateInventory)




  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
