const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const professor = await connection('professores')
            .where('id', id)
            .select('nome')
            .first();

        if(!professor){
            return response.status(400).json({ error: 'No Professor found with this ID.'});
        }

        return response.json({ professor });
    }
}