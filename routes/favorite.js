const express = require("express");
const router = express.Router();
const FavoriteController = require('../controllers/favorite');

router.get("/", FavoriteController.getAllFavs);
router.post("/:catId", FavoriteController.addToFavs);

module.exports = router;
