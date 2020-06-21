const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Project = require('./projects.js')

const UserSchema = new Schema({
    nickname: String,
    email: String,
    /*
    projects: [
        {
            type: Schema.type.ObjectId,
            ref: 'projects'
        }
    ]
    */
});

UserSchema.virtual('countProjects').get(() => {
    return this.projects.length;
});

UserSchema.pre('remove', next => {
    Project.remove({_id: {$in: this.projects}}).then(() => {
        next()
    })
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
