import db from "../config/knex.js";

async function getUserById(userId) {
  return db("users").where({ id: userId }).select("id", "name", "avatar").first();
}

export default { getUserById };
