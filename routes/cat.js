const express = require("express");
const router = express.Router();
const CatController = require('../controllers/cat');

router.get("/", CatController.showAllCats);

module.exports = router;
