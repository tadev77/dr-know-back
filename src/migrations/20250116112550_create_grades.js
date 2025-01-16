export function up(knex) {
    return knex.schema.createTable("grades", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.tinyint("grade").notNullable();
      table.integer('assessment_id').unsigned().notNullable();
      table
        .foreign('assessment_id')
        .references('id')
        .inTable('assessments')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    table.integer('student_id').unsigned().notNullable();
    table
        .foreign('student_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.timestamps(true, true);
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable("grades");
  }
  