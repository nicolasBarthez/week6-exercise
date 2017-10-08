const express = require("express");
const streamController = express.Router();
const User = require("../models/user");
const ensureLoggedIn = require("../../middlewares/user-roles-auth");
const ensureLoggedOut = require("../../middlewares/user-roles-auth");

// STREAM SECTION =========================
// streamController.get("/stream", ensureLoggedIn, function(req, res) {
//   res.render("stream.ejs", {
//     user: req.user
//   });
// });

module.exports = streamController;