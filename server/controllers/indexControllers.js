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
  try {
    const messages = await db.getMessages();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error });
  }
}

const addMessagePost = [
  ...validateUser,
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { text, username } = matchedData(req);
      const added = await db.addMessage({ text, username });
      if (!added) {
        return res.status(500).json({ success: false });
      }
      res.status(201).json({ success: true, data: added });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
];

async function getMessageDetails(req, res) {
  try {
    const { id } = req.params;
    const messageObj = await db.getMessageById(id);
    if (!messageObj) {
      return res
        .status(404)
        .json({ success: false, message: "Message not found" });
    }
    res.json(messageObj);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function deleteMessagePost(req, res) {
  try {
    const deleted = await db.deleteMessageById(req.params.id);
    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, message: "Message not found" });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getMessages,
  addMessagePost,
  getMessageDetails,
  deleteMessagePost,
};
