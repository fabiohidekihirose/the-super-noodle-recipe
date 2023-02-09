/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("recipes", function (table) {
      table.increments("id").primary(); // Set this column as the primary key
      table.string("name", 64).notNullable();
      table.string("ingredients", 500);
      table.string("instructions", 500);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    knex.schema.dropTable("recipes");
  };
