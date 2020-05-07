const express = require("express");
const router = express.Router();
const phonecallController = require("../controllers/phonecallController");

router.get("/", phonecallController.showAll);
router.get("/:id", phonecallController.showPhonecall);
router.post("/addPhonecall", phonecallController.addPhonecall);
router.post("/addObservation/:id", phonecallController.addObservation);
router.delete("/:id", phonecallController.deletePhonecall);
router.delete("/deleteObservations/:id", phonecallController.deleteObservations);
router.put("/:id", phonecallController.updatePhonecall);

module.exports = router;
