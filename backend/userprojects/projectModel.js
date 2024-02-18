const { Schema, model } = require('mongoose');

const projectSchema = Schema({
    developerName: {
        type: String,
        required: true
    },
    projectTitle: {
        type: String,
        required: true
    },
    description: String,
    hostedURL: {
        type: String,
        required: true
    },
});

const projectModel = model('Project', projectSchema);
module.exports = projectModel;

