// Step 1: Import Dependencies
const express = require('express');
const cors = require('cors');

const data = require("./data.json");
const government = require("./government.json");
const sentiment = require("./sentiment.json");


//Step 3: Create our APP Project
const app = express();

//Step 4: Create Middleware
app.use(cors());
// app.use(express.json()); // parse json bodies

// Route for Retrieving data in data.json
app.get("/data", (req, res) => {
    res.json(data);
});

// Route for Retrieving government in government.json
app.get("/government", (req, res) => {
    res.json(government);
});


// Route for Retrieving government in government.json
app.get("/sentiment", (req, res) => {
    res.json(sentiment);
});




// app.get("/", (req, res) => {
//     res.send("hello world");  //Renders hello world
// });

//People index Route//////
// app.get("/stocks", async (req, res) => {
//     try {
//         const response = await fetch("https://apewisdom.io/api/v1.0/filter/all-stocks/page/4");
//         const data = await response.json();
//         // console.log(data);
//         response.json(data);   //data.results
//     } catch (error) {
//       //send error
//         res.status(400).json(error);
//     }
// });


//People index Route//////
// app.post("/stocks", async (req, res) => {
//     try {
//         const response = await fetch("https://apewisdom.io/api/v1.0/filter/all-stocks/page/4");
//         const data = await response.json();
//         // console.log(data);
//         response.json(data);   //data.results
//     } catch (error) {
//       //send error
//         res.status(400).json(error);
//     }
// });

// app.get("/reddit", async (req, res) => {
//     try {
//         const response = await fetch("https://tradestie.com/api/v1/apps/reddit");
//         const data = await response.json();
//         // console.log(data);
//         response.json(data);   //data.results
//     } catch (error) {
//       //send error
//         res.status(400).json(error);
//     }
// });

// app.post("/reddit", async (req, res) => {
//     try {
//         const response = await fetch("https://tradestie.com/api/v1/apps/reddit");
//         const data = await response.json();
//         // console.log(data);
//         response.json(data);   //data.results
//     } catch (error) {
//       //send error
//         res.status(400).json(error);
//     }
// });




//Declare Port Number
const PORT = process.env.PORT || 4020;

//Turn on the Server Listener////
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
