import db from "../config/knex.js";

async function getStudyPlans() {
    return db("study_plans")
    .select("id", "text");
}

export default { getStudyPlans };
