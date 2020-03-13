const express = require("express");
const app = express();
const routerInfo = require("../router/routerInfo");
const routerPasswd = require("../router/routerPasswd");

app.use(express.json());
app.use("/info", routerInfo);
app.use("/passwd", routerPasswd);

app.listen(3000, () => console.log("Listening on port 3000!"));