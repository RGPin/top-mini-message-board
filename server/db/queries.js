const pool = require("./pool");

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function addMessage({ text, username }) {
  await pool.query("INSERT INTO messages (text, username) VALUES ($1, $2)", [
    text,
    username,
  ]);
}

async function getMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [
    id,
  ]);
  return rows[0];
}

async function deleteMessageById(id) {
  await pool.query("DELETE FROM messages WHERE id = ($1)", [id]);
}

module.exports = {
  getMessages,
  addMessage,
  getMessageById,
  deleteMessageById,
};
