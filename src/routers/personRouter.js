const express = require("express");
const router = express.Router();
const personController = require("../controllers/personController");

router.get("/", personController.showAll);
router.get("/:id", personController.showPerson);
router.post("/addPerson", personController.addPerson);
router.delete("/:id", personController.deletePerson);
router.put("/:id", personController.updatePerson);

module.exports = router;
