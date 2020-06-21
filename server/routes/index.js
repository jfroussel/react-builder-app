const UserController = require('../controllers/userController');
const ProjectController = require('../controllers/projectController');
module.exports = server => {
    // users
    server.get('/users', UserController.readAll);
    server.get('/user/:id', UserController.read);
    server.post('/user', UserController.create);
    server.delete('/user', UserController.delete);
    // projects
    server.get('/projects', ProjectController.readAll);
    server.get('/project/:id', ProjectController.read);
    server.post('/project', ProjectController.create);
    server.delete('/project', ProjectController.delete);
};
