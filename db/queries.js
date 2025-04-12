import { pool } from "./pool.js";

const getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

const getMessageById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [
    id,
  ]);
  return rows[0];
};

const addMessage = async (user, text) => {
  const added = new Date(Date.now()).toUTCString();
  await pool.query(
    'INSERT INTO messages ("user", text, added) VALUES ($1, $2, $3)',
    [user, text, added]
  );
};

export default { getAllMessages, getMessageById, addMessage };
