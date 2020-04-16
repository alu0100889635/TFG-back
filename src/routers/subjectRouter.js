const express = require("express");
const router = express.Router();
const subjectController = require("../controllers/subjectController");

router.get("/", subjectController.showAll);
router.get("/:id", subjectController.showSubject);
router.post("/addSubject", subjectController.addSubject);
router.delete("/:id", subjectController.deleteSubject);
router.put("/:id", subjectController.updateSubject);


module.exports = router;
