import db from "../config/knex.js";

async function getUserById(req, res) {
  const { id } = req.params;

  try {
    const user = await db("users")
      .where({ id })
      .select("id", "name", "avatar")
      .first();

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user." });
  }
}

export { getUserById };
