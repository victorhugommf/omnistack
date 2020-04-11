
const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const { page = 1 } = request.query;

        const [count] = await connection('aulas').count();

        const aulas = await connection('aulas')
        .join('professores', 'professores.id', '=', 'aulas.professor_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'aulas.*',
            'professores.nome',
            'professores.email',
            'professores.whatsapp']);
    
        response.header('X-Total_Count', count['count(*)']);

        return response.json(aulas);
    },

    async create(request, response) {
        const {weekday, tipo, cliente_id} = request.body;
        const professor_id = request.headers.authorization;

        const [id] = await connection('aulas').insert({ 
        weekday,
        tipo,
        cliente_id,
        professor_id
    });

    return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const professor_id = request.headers.authorization;

        const aula = await connection('aulas')
            .where('id', id)
            .select('professor_id')
            .first();

            if(aula.professor_id != professor_id){
                return response.status(401).json({ error: 'Not permitted.'});
            }

            await connection('aulas').where('id', id).delete();

            return response.status(204).send();
    }
};