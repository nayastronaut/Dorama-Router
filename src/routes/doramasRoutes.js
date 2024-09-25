const express = require("express");
const router = express.Router();
const doramasControllers = require("../controllers/doramasControllers");

router.post("/", doramasControllers.cadastrarDorama);
router.get("/", doramasControllers.buscarDorama);
router.put("/:id", doramasControllers.atualizarDorama);
router.delete("/:id", doramasControllers.deletarDorama);

module.exports = router;