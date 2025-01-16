export function seed(knex) {
  return knex("ies")
    .del()
    .then(() => {
      return knex("ies").insert([
        {
          name: "PUCRS",
          logo: "https://online.pucrs.br/hubfs/logo_PUCRSONLINE-1.svg",
        },
      ]);
    });
};
