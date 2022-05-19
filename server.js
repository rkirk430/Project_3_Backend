///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// get .env variables
require("dotenv").config();
// pull PORT from .env, give default value of 3000
const { PORT, MONGODB_URI } = process.env;
// import express
const express = require("express");
// create application object
const app = express();

// Import Mongoose
const mongoose = require("mongoose");

// Import Middleware//
const cors = require("cors");
const morgan = require("morgan");
const { response } = require("express");


//==========================================
//              Database Connection
//==========================================

// Establish Connection
mongoose.connect(process.env.MONGODB_URI || "localhost:4000");

// Connection Events
mongoose.connection
    .on("open", () => console.log("Your are connected to mongoose"))
    .on("close", () => console.log("Your are disconnected from mongoose"))
    .on("error", (error) => console.log(error));

///////////////////////////////
// MODELS
////////////////////////////////
const PeopleSchema = new mongoose.Schema({
    name: String,
    image: String,
    title: String,
});
  
const People = mongoose.model("People", PeopleSchema);


//=============================================================
//              MiddleWare
//=============================================================
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies


///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.send("hello world");  //Renders hello world
});

//People index Route
app.get("/stocks", async (req, res) => {
    try {
        const response = await fetch("https://apewisdom.io/api/v1.0/filter/all-stocks/page/4");
        const data = await response.json();
        // console.log(data);
      // get all people
        res.json(data.results);
    } catch (error) {
      //send error
        res.status(400).json(error);
    }
});

// async function getData() {
//     const response = await fetch("https://apewisdom.io/api/v1.0/filter/all-stocks/page/4");
//     const data = await response.json();
//     console.log(data);
// }

// getData();




//price index Route
// app.get("/price", async (req, res) => {
//     const api_url= 'https://apewisdom.io/api/v1.0/filter/all-stocks/page/4'
//     const fetch_reponse = await fetch(api_url);
//     const json = await fetch_reponse.json();
//     response.json(json);
// });


// fetch('https://apewisdom.io/api/v1.0/filter/all-stocks/page/1')
//     .then(response => response.json())
//     .then(data => console.log(data));









  // PEOPLE CREATE ROUTE
//   app.post("/people", async (req, res) => {
//     try {
//       // send all people
//         res.json(await People.create(req.body));
//     } catch (error) {
//       //send error
//         res.status(400).json(error);
//     }
// });


///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(process.env.PORT || 4000)