export function up(knex) {
    return knex.schema.createTable("assessments", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.time("appointment_date");
      table.integer('subject_id').unsigned().notNullable();
      table
        .foreign('subject_id')
        .references('id')
        .inTable('subjects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.timestamps(true, true);
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable("assessments");
  }
  