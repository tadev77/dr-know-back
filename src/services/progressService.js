import db from "../config/knex.js";

function sortProgressByWeekDay(progress) {
  return progress.sort(function(a, b) {
    let dayA = new Date(a.current_day).getDay();
    let dayB = new Date(b.current_day).getDay();

    // since we start from monday, we gotta treat the sunday case
    if (dayA === 0) return 1;
    if (dayB === 0) return -1;
    return dayA - dayB;
  })
}

async function getProgressByStudentCourse(studentId, courseId) {
    const progress = await db("progress")
    .where("progress.student_id", studentId)
    .andWhere("progress.course_id", courseId)
    .select(
      "current_day",
      "progress",
    );

    return sortProgressByWeekDay(progress);
}

export default { getProgressByStudentCourse };
