exports.seed = function (knex) {
  return knex('users').del() // Limpa os dados existentes
    .then(() => {
      return knex('users').insert([
        { name: 'John Doe', email: 'john.doe@example.com' },
        { name: 'Jane Smith', email: 'jane.smith@example.com' },
      ]);
    });
};