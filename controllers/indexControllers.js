const db = require("../db/queries");

async function getMessages(req, res) {
  const messages = await db.getMessages();
  res.render("index", {
    title: "Mini Messageboard",
    messages,
  });
}

async function addMessageGet(req, res) {
  res.render("form");
}

async function addMessagePost(req, res) {
  const { text, username } = req.body;
  await db.addMessage({ text, username });
  res.redirect("/");
}

async function getMessageDetails(req, res) {
  const { id } = req.params;
  const messageObj = await db.getMessageById(id);
  if (!messageObj) res.send("Message not found");
  res.render("details", { messageObj });
}

module.exports = {
  getMessages,
  addMessageGet,
  addMessagePost,
  getMessageDetails,
};
