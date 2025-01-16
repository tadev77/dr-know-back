export function up(knex) {
    return knex.schema.createTable("subjects", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.text('description');
      table.integer('course_semester_id').unsigned().notNullable();
      table
        .foreign('course_semester_id')
        .references('id')
        .inTable('course_semesters')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.timestamps(true, true);
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable("subjects");
  }
  