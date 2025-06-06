const express = require("express");
const router = express.Router();

const categoriaController = require("../controllers/categoria.controller");

router.get("/", categoriaController.getCategorias);
router.get("/:id", categoriaController.getCategoria);
router.post("/", categoriaController.createCategoria);

module.exports = router;
