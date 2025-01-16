export function up(knex) {
    return knex.schema.createTable("videos", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("url").notNullable();
      table.integer("length").notNullable();
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
    return knex.schema.dropTable("videos");
  }
  