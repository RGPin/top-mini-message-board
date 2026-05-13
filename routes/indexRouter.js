const express = require("express");

const indexRouter = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.get("/details/:user", (req, res) => {
  const { user } = req.params;
  const messageObj = messages.find((message) => user === message.user);
  if (!messageObj) res.send("Message not found");
  res.render("details", { messageObj });
});

indexRouter.post("/new", (req, res) => {
  const { author, message } = req.body;
  messages.push({
    text: message,
    user: author,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
