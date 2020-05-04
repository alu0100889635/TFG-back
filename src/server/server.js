'use strcit';

const express = require("express");
const mongoose = require("mongoose");
//midlewares
const morgan = require("morgan");
const cors = require("cors");
//Routers
const phonecallRouter = require("../routers/phonecallRouter");
const subjectRouter = require("../routers/subjectRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cors());

app.use("/phonecalls", phonecallRouter);
app.use("/subjects", subjectRouter);

mongoose.connect("mongodb://161.35.42.76:27017/emergenciasdb", {
    "auth": { "authSource": "admin" },
    "user": "root",
    "pass": "secret"
});
/* mongoose
.connect("mongodb://root:secret@161.35.42.76:27017/emergenciasdb", { useNewUrlParser: true, useUnifiedTopology: true }, )
.then(console.log("DB connection was succesful"))
.catch(err => console.log(err)); */

app.set("port", process.env.PORT || 3000);
const port = app.get("port");

app.listen(port, () => console.log(`Listening on port ${port}!`));
