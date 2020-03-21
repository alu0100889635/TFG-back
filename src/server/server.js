const express = require("express");
const app = express();
const mysql = require("mysql");
const routerCall = require("../router/routerLlamada");

const mc = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "emergenciasdb"
})
mc.connect();

app.use(express.json());
app.use("/call", routerCall);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Expose-Headers', 'x-total-count');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type,authorization');
  
    next();
});

app.listen(3000, () => console.log("Listening on port 3000!"));