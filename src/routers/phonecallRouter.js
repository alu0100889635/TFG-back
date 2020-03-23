const express = require("express");
const router = express.Router();
const phonecallController = require("../controllers/phonecallController");

router.get("/", phonecallController.showAll);
router.get("/:id", phonecallController.showPhonecall);
router.post("/addPhonecall", phonecallController.addPhonecall);
router.delete("/:id", phonecallController.deletePhonecall);
router.put("/:id", phonecallController.updatePhonecall);

module.exports = router;
