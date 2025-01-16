export function seed(knex) {
  return knex("progress")
    .del()
    .then(() => {
      return knex("progress").insert([
        {
          current_day: new Date("2025-01-10"),
          progress: 55,
          student_id: 1
        },
        {
          current_day: new Date("2025-01-11"),
          progress: 90,
          student_id: 1
        },
        {
          current_day: new Date("2025-01-12"),
          progress: 120,
          student_id: 1
        },
        {
          current_day: new Date("2025-01-13"),
          progress: 25,
          student_id: 1
        },
        {
          current_day: new Date("2025-01-14"),
          progress: 90,
          student_id: 1
        },
        {
          current_day: new Date("2025-01-15"),
          progress: 60,
          student_id: 1
        },
        {
          current_day: new Date("2025-01-16"),
          progress: 90,
          student_id: 1
        },
      ]);
    });
};
