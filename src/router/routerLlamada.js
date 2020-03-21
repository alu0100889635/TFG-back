const express = require("express");
const router = express.Router();
const llamadaController = require("../controller/llamadaController");

router.get("/", llamadaController.showAll);
// router.get("/:id", llamadaController.showllamada);
//router.post("/addllamada", llamadaController.create_llamada);
// router.delete("/:id", llamadaController.deletellamada);
// router.put("/:id", llamadaController.updatellamada);

module.exports = router;