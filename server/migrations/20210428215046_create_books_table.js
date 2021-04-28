
exports.up = function(knex) {
  return knex.schema.createTable('books', (table) => {
      table.increments('id').primary()
      table.string('title')
      table.string('author')
      table.string('isbn')
      table.boolean('checked_out')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('books');
};
