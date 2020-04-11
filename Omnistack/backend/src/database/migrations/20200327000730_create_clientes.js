
exports.up = function(knex) {
    return knex.schema.createTable('clientes', function (table){
        table.increments();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('professor_id').notNullable();

        table.foreign('professor_id').references('id').inTable('professores');
    })
  };
  
  exports.down = function(knex) {
    knox.schema.dropTable('clientes');
  };
  