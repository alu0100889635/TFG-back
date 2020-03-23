const express = require("express");
const mongoose = require("mongoose");
const phonecallRouter = require("../routers/phonecallRouter");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/phonecalls", phonecallRouter);

mongoose
.connect("mongodb://127.0.0.1/emergenciasdb", { useNewUrlParser: true, useUnifiedTopology: true })
.then(console.log("DB connection was succesful"))
.catch(err => console.log(err));

app.set("port", process.env.PORT || 3000);
const port = app.get("port");

app.listen(3000, () => console.log(`Listening on port ${port}!`));