export function up(knex) {
  return knex.schema.createTable("courses", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.integer('ie_id').unsigned().notNullable();
    table
      .foreign('ie_id')
      .references('id')
      .inTable('ies')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table.timestamps(true, true);
  });
}

export function down(knex) {
  return knex.schema.dropTable("courses");
}
