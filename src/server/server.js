const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const phonecallRouter = require("../routers/phonecallRouter");
const personRouter = require("../routers/subjectRouter");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/phonecalls", phonecallRouter);
app.use("/people", personRouter);

mongoose
.connect("mongodb://localhost:27017/emergenciasdb", { useNewUrlParser: true, useUnifiedTopology: true })
.then(console.log("DB connection was succesful"))
.catch(err => console.log(err));

app.set("port", process.env.PORT || 3000);
const port = app.get("port");

app.listen(3000, () => console.log(`Listening on port ${port}!`));