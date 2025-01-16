// progresso do aluno de tempo de vídeo assistido por dia
export function up(knex) {
  return knex.schema.createTable("progress", (table) => {
    table.increments("id").primary();
    table.date("current_day");
    table.integer("progress").notNullable();
    table.integer("student_id").unsigned().notNullable();
    table
      .foreign("student_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamps(true, true);
  });
}

export function down(knex) {
  return knex.schema.dropTable("progress");
}
