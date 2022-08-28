const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

//Logger
app.use(morgan("combined"));
//API security
app.use(helmet());
// Set body bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());

console.log("Connected to MongoDB")
mongoose.connect(process.env.MONGO_URL).then(
).catch(err => console.error(err));


app.get("/", (req, res) => {
    res.json("Hi man")
})


app.listen(PORT, ()=>{
    console.log("Backend is listening on port " + PORT);
});