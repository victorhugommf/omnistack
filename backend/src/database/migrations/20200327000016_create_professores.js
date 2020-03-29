
exports.up = function(knex) {
  return knex.schema.createTable('professores', function (table){
      table.string('id').primary();
      table.string('nome').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
  })
};

exports.down = function(knex) {
  knox.schema.dropTable('professores');
};
