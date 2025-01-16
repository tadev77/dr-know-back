export function seed(knex) {
  return knex("subjects")
    .del()
    .then(() => {
      return knex("subjects").insert([
        {
          name: "Lógica de Programação",
          course_semester_id: 1
        },
        {
          name: "Arquitetura de Computadores",
          course_semester_id: 1
        },
        {
          name: "Programação Web",
          course_semester_id: 2
        },
        {
          name: "Redes de Computadores",
          course_semester_id: 3
        },
        {
          name: "Banco de Dados",
          course_semester_id: 3
        },
        {
          name: "Sistemas Operacionais",
          course_semester_id: 3
        },
        {
          name: "Sistemas Distribuídos",
          course_semester_id: 4
        },
        {
          name: "Trabalho de Conclusão de Curso",
          course_semester_id: 4
        },
      ]);
    });
};
