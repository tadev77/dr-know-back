export function seed(knex) {
  return knex("courses")
    .del()
    .then(() => {
      return knex("courses").insert([
        {
          name: "Análise e Desenvolvimento de Sistemas",
          ie_id: 1
        },
      ]);
    });
};
