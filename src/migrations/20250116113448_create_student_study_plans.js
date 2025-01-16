export function up(knex) {
    return knex.schema.createTable("student_study_plans", (table) => {
      table.increments("id").primary();
      table.integer('study_plan_id').unsigned().notNullable();
      table
        .foreign('study_plan_id')
        .references('id')
        .inTable('study_plans')
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
    return knex.schema.dropTable("student_study_plans");
  }
  