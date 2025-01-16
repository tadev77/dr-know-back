import db from "../config/knex.js";

async function getPerformanceByCourse(studentId, courseId) {
  return db("grades")
    .where("grades.student_id", studentId)
    .join(
      "assessments",
      "assessments.id",
      "=",
      "grades.assessment_id"
    )
    .join(
        "subjects",
        "subjects.id",
        "=",
        "assessments.subject_id"
    )
    .join(
        "course_semesters",
        "course_semesters.id",
        "=",
        "subjects.course_semester_id"
    )
    .where("course_semesters.course_id", courseId)
    .groupBy("assessments.subject_id")
    .avg("grades.grade as avg_grade")
    .select(
        "assessments.subject_id as subject_id",
        "course_semesters.id as semester_id",
    );
}

export default { getPerformanceByCourse };
