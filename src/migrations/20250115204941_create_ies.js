export function up(knex) {
  return knex.schema.createTable("ies", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("logo").notNullable();
    table.timestamps(true, true);
  });
}

export function down(knex) {
  return knex.schema.dropTable("ies");
}
