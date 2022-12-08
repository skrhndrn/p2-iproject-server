const express = require("express");
const router = express.Router();
const CatController = require('../controllers/cat');

router.get("/", CatController.getAllCats);

module.exports = router;
