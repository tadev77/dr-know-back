export function up(knex) {
    return knex.schema.createTable("books", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("format").notNullable();
      table.integer("url").notNullable();
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
    return knex.schema.dropTable("books");
  }
  