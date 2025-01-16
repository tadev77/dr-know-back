export function seed(knex) {
  return knex("assessments")
    .del()
    .then(() => {
      return knex("assessments").insert([
        {
          name: "Teste",
          appointment_date: new Date("2025-01-01"),
          subject_id: 1
        },
        {
          name: "Prova",
          appointment_date: new Date("2024-01-02"),
          subject_id: 1
        },
        {
          name: "Teste 1",
          appointment_date: new Date("2025-01-03"),
          subject_id: 2
        },
        {
          name: "Teste 2",
          appointment_date: new Date("2025-01-04"),
          subject_id: 2
        },
        {
          name: "Prova",
          appointment_date: new Date("2025-01-05"),
          subject_id: 2
        },
        {
          name: "Prova",
          appointment_date: new Date("2025-01-06"),
          subject_id: 3
        },
        {
          name: "Prova",
          appointment_date: new Date("2025-01-07"),
          subject_id: 4
        },
        {
          name: "Prova",
          appointment_date: new Date("2025-01-15"),
          subject_id: 5
        },
        {
          name: "Prova",
          appointment_date: new Date("2025-01-20"),
          subject_id: 6
        },
        {
          name: "Prova",
          appointment_date: new Date("2025-01-21"),
          subject_id: 7
        },
        {
          name: "Prova",
          appointment_date: new Date("2025-01-22"),
          subject_id: 8
        },
      ]);
    });
};
