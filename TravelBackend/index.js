const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const pdf = require("html-pdf");
const pdfTemplate = require("./doc");

const FlightRoute = require("./routes/flight.js")
const BookingRoute = require( "./routes/booking.js");
const UserDetailsRoute = require( "./routes/userDetails.js");


const PORT = process.env.PORT || 8000;

app.use(cookieParser());


const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

//Logger
app.use(morgan("combined"));
//API security
app.use(helmet());



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());

console.log("Connected to MongoDB")
mongoose.connect(process.env.MONGO_URL).then(
).catch(err => console.error(err));


app.use("/v1/flights", FlightRoute);
app.use("/v1/bookings", BookingRoute);
app.use("/v1/userDetails", UserDetailsRoute);



app.post("/v1/create-pdf", (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
    if (err) {
    res.send(Promise.reject());
    }
    res.send(Promise.resolve());
    });
});

app.get("/v1/fetch-pdf", (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`);
});


app.listen(PORT, ()=>{
    console.log("Backend is listening on port " + PORT);
});