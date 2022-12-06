const express = require("express");
const router = express.Router();
const AdoptController = require('../controllers/adopt');

router.post("/:catId", AdoptController.adoptCat);

module.exports = router;
