export function seed(knex) {
  return knex("users")
    .del()
    .then(() => {
      return knex("users").insert([
        {
          name: "John Doe",
          email: "john.doe@example.com",
          avatar:
            "https://www.citypng.com/public/uploads/preview/free-round-flat-male-portrait-avatar-user-icon-png-701751695032786rubzjpxmv7.png",
        },
      ]);
    });
};
