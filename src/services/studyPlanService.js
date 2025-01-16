import db from "../config/knex.js";

async function getStudyPlans() {
  return db("study_plans").select("id", "text");
}

async function createStudentStudyPlan(studentId, studyPlanId) {
  return db("student_study_plans").insert({
    student_id: studentId,
    study_plan_id: studyPlanId,
  });
}

export default { getStudyPlans, createStudentStudyPlan };
