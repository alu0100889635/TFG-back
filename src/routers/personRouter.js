const express = require("express");
const router = express.Router();
const personController = require("../controllers/personController");

router.get("/", personController.showAll);
router.get("/:id", personController.showPhonecall);
router.post("/addPerson", personController.addPhonecall);
router.delete("/:id", personController.deletePhonecall);
router.put("/:id", personController.updatePhonecall);

module.exports = router;
