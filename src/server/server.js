const express = require("express");
const mongoose = require("mongoose");
//midlewares
const morgan = require("morgan");
const cors = require("cors");
//Routers
const phonecallRouter = require("../routers/phonecallRouter");
const personRouter = require("../routers/subjectRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cors());

app.use("/phonecalls", phonecallRouter);
app.use("/subjects", personRouter);

mongoose
.connect("mongodb://localhost:27017/emergenciasdb", { useNewUrlParser: true, useUnifiedTopology: true })
.then(console.log("DB connection was succesful"))
.catch(err => console.log(err));

app.set("port", process.env.PORT || 3000);
const port = app.get("port");

app.listen(port, () => console.log(`Listening on port ${port}!`));