export function up(knex) {
    return knex.schema.createTable("progress", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.integer("percent_progress").notNullable();
      table.integer("raw_progress").notNullable();
      table.integer('video_id').unsigned().notNullable();
      table
        .foreign('video_id')
        .references('id')
        .inTable('videos')
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
    return knex.schema.dropTable("progress");
  }
  