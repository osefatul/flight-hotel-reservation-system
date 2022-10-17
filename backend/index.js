const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const authRoute = require("./routes/auth.js")
const usersRoute = require( "./routes/user.js");
const hotelsRoute = require( "./routes/hotel.js");
const roomsRoute = require("./routes/room.js");

const PORT = process.env.PORT || 5000;

app.use(cookieParser());


const corsOptions = {
    // origin: "https://stays-travels-system.netlify.app",
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));


//Logger
app.use(morgan("combined"));
//API security
app.use(helmet());



// Set body bodyParser: In order to get access to the post data we have to use body-parser . Basically what the body-parser is which allows express to read the body and then parse that into a Json object that we can understand.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());

console.log("Connected to MongoDB")
mongoose.connect(process.env.MONGO_URL).then(
).catch(err => console.error(err));


// TEST GET REQUEST
app.get("/", (req, res) => {
    res.send("Hi There");
});

app.use("/v1/auth", authRoute);
app.use("/v1/users", usersRoute);
app.use("/v1/hotels", hotelsRoute);
app.use("/v1/rooms", roomsRoute);



app.listen(PORT, ()=>{
    console.log("Backend is listening on port " + PORT);
});