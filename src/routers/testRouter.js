const express = require("express");
const router = express.Router();
const testController = require("../controllers/testController");

router.post("/", testController.postTest);

module.exports = router;