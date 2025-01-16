export function up(knex) {
  return knex.schema.createTable("study_plans", (table) => {
    table.increments("id").primary();
    table.string("text").notNullable();
    table.timestamps(true, true);
  });
}

export function down(knex) {
  return knex.schema.dropTable("study_plans");
}
