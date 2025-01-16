export function seed(knex) {
  return knex("study_plans")
    .del()
    .then(() => {
      return knex("study_plans").insert([
        {
          text: "De 1 a 3 dias por semana"
        },
        {
          text: "Entre 4 e 5 dias"
        },
        {
          text: "5 dias, considerando dias úteis"
        },
        {
          text: "7 dias por semana"
        },
      ]);
    });
};
