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

module.exports = {
  getMessages,
  addMessageGet,
  addMessagePost,
};
