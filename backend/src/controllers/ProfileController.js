const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const professor_id = request.headears.authorization;

        const aulas = await connection('aulas')
            .where('professor_id', professor_id)
            .select('*');

            return response.json(aulas);
    }
}