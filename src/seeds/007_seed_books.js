export function seed(knex) {
  return knex("books")
    .del()
    .then(() => {
      return knex("books").insert([
        {
          name: "Introdução",
          url: "http://google.com",
          format: "pdf",
          subject_id: 1
        },
        {
          name: "Introdução",
          url: "http://google.com",
          format: "pdf",
          subject_id: 2
        },
        {
          name: "Introdução",
          url: "http://google.com",
          format: "pdf",
          subject_id: 3
        },
        {
          name: "Introdução",
          url: "http://google.com",
          format: "pdf",
          subject_id: 4
        },
        {
          name: "Introdução",
          url: "http://google.com",
          format: "pdf",
          subject_id: 5
        },
        {
          name: "Introdução",
          url: "http://google.com",
          format: "pdf",
          subject_id: 6
        },
        {
          name: "Introdução",
          url: "http://google.com",
          format: "pdf",
          subject_id: 7
        },
        {
          name: "Introdução",
          url: "http://google.com",
          format: "pdf",
          subject_id: 8
        },
      ]);
    });
};
