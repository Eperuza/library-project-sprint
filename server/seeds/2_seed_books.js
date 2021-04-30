
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {"title": "Derek's Biography", "isbn": "1234567890", "author": "Derek", "checked_out": false},
        {"title": "Jeremy's Biography", "isbn": "1234567891", "author": "Jeremy", "checked_out": false},
        {"title": "The Adventures of Zach and Jeff", "isbn": "1234567892", "author": "Greg", "checked_out": false},
        {"title": "Failing is Learning", "isbn": "1234567893", "author": "Jeff", "checked_out": true, "due_date": '05-03-2021', "checkout_date": '04-28-2021', "user_id": '2'},
        {"title": "Test the Test, an Endless Loop", "isbn": "1234567894", "author": "Lyle", "checked_out": false}
    
      ]);
    });
};
