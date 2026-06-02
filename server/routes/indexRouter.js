const express = require("express");

const indexRouter = express.Router();
const controller = require("../controllers/indexControllers");

indexRouter.post("/", controller.getMessages);
indexRouter.post("/details/:id", controller.getMessageDetails);
indexRouter.post("/new", controller.addMessagePost);
indexRouter.post("/delete/:id", controller.deleteMessagePost);

module.exports = indexRouter;
