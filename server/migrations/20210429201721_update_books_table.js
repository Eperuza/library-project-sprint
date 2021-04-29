
exports.up = function(knex) {
    return knex.schema.table('books', table => {
        table.date('checkout_date');
        table.date('due_date')
        table.integer('user_id')
        table.foreign('user_id').references('users.id')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('books');
  };
  