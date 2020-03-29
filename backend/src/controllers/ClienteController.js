const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const cliente = await connection('clientes').select('*');
    
        return response.json(clientes);
    },

    async create(request, response) {
        const {nome, email, whatsapp } = request.body;
        const professor_id = request.headers.authorization;


        const [id] = await connection('clientes').insert({
        nome,
        email,
        whatsapp,
        professor_id,
    })

    return response.json({ id });
    }
}