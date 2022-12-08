"use strict";
const express = require("express");
const UserController = require("../controllers/user");
const router = express.Router();
const favRouter = require("./favorite");
const adoptRouter = require("./adopt");
const catRouter = require('./cat');
const authentication = require("../middlewares/authentication");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
// router.post("/github-login", UserController.githubLogin);
router.use("/cats", catRouter);
router.use(authentication);
router.use("/favorites", favRouter);
router.use("/adopt", adoptRouter);

module.exports = router;
