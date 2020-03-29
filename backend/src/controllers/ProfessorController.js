const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const professores = await connection('professores').select('*');
    
        return response.json(professores);
    },

    async create(request, response) {
        const {nome, email, whatsapp} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('professores').insert({
        id,
        nome,
        email,
        whatsapp
    })

    return response.json({ id });
    }
}