const express = require("express");

const indexRouter = express.Router();
const controller = require("../controllers/indexControllers");

indexRouter.get("/", controller.getMessages);
indexRouter.get("/details/:id", controller.getMessageDetails);
indexRouter.post("/new", controller.addMessagePost);
indexRouter.delete("/delete/:id", controller.deleteMessagePost);

module.exports = indexRouter;
