import db from "../config/knex.js";

async function getSubjectByCourse(courseId) {
    return db("subjects")
    .join("course_semesters", "course_semesters.id", "=", "subjects.course_semester_id")
    .where("course_semesters.course_id", courseId)
    .select(
      "course_semesters.name as course_semester_name",
      "subjects.name as subject_name",
      "subjects.description as subject_description",
    );
}

export default { getSubjectByCourse };
