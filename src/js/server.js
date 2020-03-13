const express = require("express");
const app = express();
const routerCall = require("../router/routerCall");
const routerPasswd = require("../router/routerPasswd");

app.use(express.json());
app.use("/call", routerCall);
app.use("/passwd", routerPasswd);

app.listen(3000, () => console.log("Listening on port 3000!"));