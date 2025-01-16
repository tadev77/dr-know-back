export function seed(knex) {
  return knex("grades")
    .del()
    .then(() => {
      return knex("grades").insert([
        {
          name: "Teste",
          grade: 100,
          assessment_id: 1,
          student_id: 1
        },
        {
          name: "Prova",
          grade: 80,
          assessment_id: 2,
          student_id: 1
        },
        {
          name: "Teste 1",
          grade: 100,
          assessment_id: 3,
          student_id: 1
        },
        {
          name: "Teste 2",
          grade: 70,
          assessment_id: 4,
          student_id: 1
        },
        {
          name: "Prova",
          grade: 70,
          assessment_id: 5,
          student_id: 1
        },
        {
          name: "Prova",
          grade: 100,
          assessment_id: 6,
          student_id: 1
        },
        {
          name: "Prova",
          grade: 60,
          assessment_id: 7,
          student_id: 1
        },
        {
          name: "Prova",
          grade: 100,
          assessment_id: 8,
          student_id: 1
        },
      ]);
    });
};
