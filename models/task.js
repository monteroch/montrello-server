const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    _id:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    },
    createdAt:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
});

const Task = mongoose.model('Task', taskSchema);
module.exports =  Task;