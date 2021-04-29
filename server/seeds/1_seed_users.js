
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { first_name: 'Archibald', last_name:'Snuffy' },
        { first_name: 'Dave', last_name: 'Chapelle'},
        { first_name: 'Axl', last_name: 'Rose'},
        { first_name: 'Ash', last_name: 'Ketchum'},
      ]);
    });
};
