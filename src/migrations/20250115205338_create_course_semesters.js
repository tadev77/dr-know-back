export function up(knex) {
    return knex.schema.createTable("course_semesters", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.integer('course_id').unsigned().notNullable();
      table
        .foreign('course_id')
        .references('id')
        .inTable('courses')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.timestamps(true, true);
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable("course_semesters");
  }
  