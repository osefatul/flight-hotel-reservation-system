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
const path = require("path");

const FlightRoute = require("./routes/flight.js")
const BookingRoute = require( "./routes/booking.js");
const UserDetailsRoute = require( "./routes/userDetails.js");
const OrdersRoute = require( "./routes/orders");
const PaymentRoute = require("./routes/payments.js")
const puppeteer = require('puppeteer')
const fs = require("fs");


const PORT = process.env.PORT || 8000;

app.use(cookieParser());


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});


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
app.use(express.json());
app.use("/api/checkout/webhook", bodyParser.raw({ type: "*/*" })); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "files")));


// MONGODB CONNECTION...
console.log("Connected to MongoDB")
mongoose.connect(process.env.MONGO_URL).then(
).catch(err => console.error(err));


// TEST GET REQUEST
app.get("/", (req, res) => {
    res.send("Hi There");
});


//ROUTES
app.use("/v1/flights", FlightRoute);
app.use("/v1/bookings", BookingRoute);
app.use("/v1/userDetails", UserDetailsRoute);
app.use("/v1/orders", OrdersRoute);
app.use("/v1/payments", PaymentRoute);


// GENERATE PDF AND SAVE IT...
app.post("/v1/create-pdf", (req, res) => {
    console.log(req.body)
    // pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
    //     try{
    //         res.send(Promise.resolve());
    //         // res.download()
    //     }catch(err){
    //         console.log(err)
    //         return res.send(Promise.reject());
            
    //     }
    // }
    // );

        const fileName = 'test.pdf';
        const fileUrl = `http://localhost:${PORT}/${fileName}`;
        const filePath = path.join(__dirname, 'files', fileName);
        // res.pdf.create(pdfTemplate(req.body)


        // console.log(pdf.create(pdfTemplate(req.body)))
        res.download(pdf.create(pdfTemplate(req.body)))


});

// GET PDF FROM THE ROOT FOLDER THAT WE SAVED ABOVE...
app.get("/v1/fetch-pdf", (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`);
});


app.listen(PORT, ()=>{
    console.log("Backend is listening on port " + PORT);
});