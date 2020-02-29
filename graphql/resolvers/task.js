const Task = require('../../models/task');
const ObjectId = require('mongodb').ObjectID;

module.exports = {
    createTask: async args => {
        try{
            let taskId = ObjectId().toString();
            //creating the task
            const task = new Task({
                _id: taskId,
                text: args.TaskInput.text,
                createdAt: args.TaskInput.createdAt,
                status: args.TaskInput.status
            });
            //Saving the task into the database
            const result = await task.save();
            return{
                _id: result._id
            }
        }catch(error){
            throw error;
        }
    },
    updateTask: async data => {
        console.log("The data is: ", data)
        try{
            // MyModel.updateOne({ foo: 'bar' }, { answer: 42 });
            Task.updateOne({_id: data.TaskData._id}, {status: data.TaskData.status})
                .then( (result) => console.log(result));
        }catch(error){
            throw error;
        }
    },
    removeTask: async taskId => {
        console.log("The taskId is: ", taskId.taskId);
        try{
            Task.deleteOne({_id: taskId.taskId})
            .then( result => console.log(result));
            return taskId.taskId;
        }catch(error){
            throw error;
        }
    },
    loadTask: async taskId => {
        try{
            let task = await Task.findOne({_id: taskId.taskId});
            return task;
        }catch(error){
            throw error;
        }
    },
    loadTasks: async () => {
        try{
            const tasks = await Task.find();
            return tasks.map( task => {
                return task;
            });
        }catch(error){
            throw error;
        }
    }
}
