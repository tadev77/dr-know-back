import db from "../config/knex.js";

async function getCourseById(courseId) {
    return db("courses")
    .where("courses.id", courseId)
    .join("ies", "courses.ie_id", "=", "ies.id")
    .select(
      "courses.id as course_id",
      "courses.name as course_name",
      "ies.name as ie_name"
    )
    .first();
}

export default { getCourseById };
