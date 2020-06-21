const Project = require('../models/projects');
module.exports = {
    readAll(req, res) {
        Project.find().then(projects => {
            res.send(projects);
        });
    },
    read(req, res) {
        const { id } = req.params;
        Project.findById(id).then(project => {
            res.send(project);
        });
    },
    create(req, res) {
        const body = req.body;
        const project = new Project({
            name: body.name,
            description: body.description
        });
        project.save().then(() => {
            res.send({ result: project });
        });
    },
    delete(req, res) {
        const { id } = req.body;
        Project.findByIdAndRemove(id).then(project => {
            res.send(project);
        });
    }
};
