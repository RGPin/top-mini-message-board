const express = require("express");

const indexRouter = express.Router();

indexRouter.get("/", (req, res) => res.send("Hello my guy"));

module.exports = indexRouter;
