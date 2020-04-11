const express = require('express');

const ProfessorController = require('./controllers/ProfessorController');
const AulaController = require('./controllers/AulaController');
const ClienteController = require('./controllers/ClienteController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/professores', ProfessorController.index);
routes.post('/professores', ProfessorController.create);

routes.get('/clientes', ClienteController.index);
routes.post('/clientes', ClienteController.create);

routes.get('/aulas', AulaController.index);
routes.post('/aulas', AulaController.create);
routes.delete('/aulas/:id', AulaController.delete);

routes.get('/profile', ProfileController.index);

    
module.exports = routes;