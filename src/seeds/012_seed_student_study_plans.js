export function seed(knex) {
  return knex("student_study_plans")
    .del()
    .then(() => {
      return knex("student_study_plans").insert([
        {
          student_id: 1,
          study_plan_id: 1
        },
      ]);
    });
};
