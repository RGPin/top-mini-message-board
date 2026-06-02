const pool = require("./pool");

async function getMessages() {
  try {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function addMessage({ text, username }) {
  try {
    const { rows } = await pool.query(
      "INSERT INTO messages (text, username) VALUES ($1, $2) RETURNING *",
      [text, username],
    );
    return rows[0] || null;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getMessageById(id) {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM messages WHERE id = ($1)",
      [id],
    );
    return rows[0] || null;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deleteMessageById(id) {
  try {
    const { rows } = await pool.query(
      "DELETE FROM messages WHERE id = ($1) RETURNING *",
      [id],
    );
    return rows[0] || null;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  getMessages,
  addMessage,
  getMessageById,
  deleteMessageById,
};
