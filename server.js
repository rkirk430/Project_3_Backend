// Step 1: Import Dependencies
const express = require('express');
const cors = require('cors');

//Step 3: Create our APP Project
const app = express();

//Step 4: Create Middleware
app.use(cors());
app.use(express.json()); // parse json bodies


app.get("/", (req, res) => {
    res.send("hello world");  //Renders hello world
});

//People index Route//
app.get("/stocks", async (req, res) => {
    try {
        const response = await fetch("https://apewisdom.io/api/v1.0/filter/all-stocks/page/4");
        const data = await response.json();
        // console.log(data);
        res.json(data);   //data.results
    } catch (error) {
      //send error
        res.status(400).json(error);
    }
});

//Declare Port Number
const PORT = process.env.PORT || 4020;

//Turn on the Server Listener////
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
