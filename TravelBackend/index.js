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
const OrdersRoute = require( "./routes/orders");
const PaymentRoute = require("./routes/payments.js")
const puppeteer = require('puppeteer')
const fs = require("fs");
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

app.use(express.json());

app.use("/api/checkout/webhook", bodyParser.raw({ type: "*/*" })); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


console.log("Connected to MongoDB")
mongoose.connect(process.env.MONGO_URL).then(
).catch(err => console.error(err));


app.use("/v1/flights", FlightRoute);
app.use("/v1/bookings", BookingRoute);
app.use("/v1/userDetails", UserDetailsRoute);
app.use("/v1/orders", OrdersRoute);
app.use("/v1/payments", PaymentRoute);




// app.post("/v1/create-pdf", (req, res) => {
//     pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
//     if (err) {
//     res.send(Promise.reject());
//     }
//     res.send(Promise.resolve());
//     });
// });


// async function printPDF() {
//     const browser = await puppeteer.launch({ headless: true });
//     const page = await browser.newPage();
//     await page.goto('https://blog.risingstack.com', {waitUntil: 'networkidle0'});
//     const pdf = await page.pdf({ format: 'A4' });

//     await browser.close();
//     return pdf
// }

// app.post("/v1/create-pdf", (req, res) => {

// });

app.post("/v1/create-pdf", (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toStream( (err, stream) => {
    if (err) {
    res.send(Promise.reject());
    }
    // res.writeHead(200, {
    //     'Content-Type': 'application/force-download', 'application/pdf',
    //     'Content-disposition': 'attachment; filename=file.pdf'
    // });

    // res.download("")
    stream.pipe(fs.createWriteStream('./foo.pdf'));
    // res.send(Promise.resolve());
    });
});

app.get("/v1/fetch-pdf", (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`);
});




app.listen(PORT, ()=>{
    console.log("Backend is listening on port " + PORT);
});