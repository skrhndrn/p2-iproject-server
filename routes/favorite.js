const express = require("express");
const router = express.Router();

router.get("/");
router.post("/:catId");

module.exports = router;
