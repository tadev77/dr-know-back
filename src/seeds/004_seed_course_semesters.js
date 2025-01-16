export function seed(knex) {
  return knex("course_semesters")
    .del()
    .then(() => {
      return knex("course_semesters").insert([
        {
          name: "1° Trimestre",
          course_id: 1
        },
        {
          name: "2° Trimestre",
          course_id: 1
        },
        {
          name: "3° Trimestre",
          course_id: 1
        },
        {
          name: "4° Trimestre",
          course_id: 1
        },
      ]);
    });
};
