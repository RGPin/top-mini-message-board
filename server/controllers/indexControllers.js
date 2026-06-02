const db = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");

const lengthErr = "must be between 1 and 10 characters.";

const validateUser = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Enter username")
    .isLength({ max: 10 })
    .withMessage(`Username ${lengthErr}`),
  body("text")
    .trim()
    .notEmpty()
    .withMessage("Enter message")
    .isLength({ max: 500 })
    .withMessage("Message must be 500 characters or below."),
];

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

const addMessagePost = [
  ...validateUser,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", { errors: errors.array() });
    }
    const { text, username } = matchedData(req);
    await db.addMessage({ text, username });
    res.redirect("/");
  },
];

async function getMessageDetails(req, res) {
  const { id } = req.params;
  const messageObj = await db.getMessageById(id);
  if (!messageObj) res.send("Message not found");
  res.render("details", { messageObj });
}

async function deleteMessagePost(req, res) {
  await db.deleteMessageById(req.params.id);
  res.redirect("/");
}

module.exports = {
  getMessages,
  addMessageGet,
  addMessagePost,
  getMessageDetails,
  deleteMessagePost,
};
