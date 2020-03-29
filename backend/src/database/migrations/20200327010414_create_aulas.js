
exports.up = function(knex) {
    return knex.schema.createTable('aulas', function (table){
        table.increments();
        table.int('weekday').notNullable();
        table.string('tipo').notNullable();
        table.string('professor_id').notNullable();
        table.string('cliente_id').notNullable();

        table.foreign('professor_id').references('id').inTable('professores');
        table.foreign('cliente_id').references('id').inTable('clientes');
    })
  
};

exports.down = function(knex) {
    knox.schema.dropTable('aulas');
};
