const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Task{
        _id: String
        text: String
        createdAt: String
        status: String
    }

    input TaskInput{
        text: String
        createdAt: String
        status: String
    }

    input TaskData{
        _id: String
        status: String
    }

    type taskId{
        _id: String
    }

    type RootQuery {
        loadTask(taskId: String): Task
        loadTasks: [Task]
    }

    type RootMutation {
        createTask(TaskInput: TaskInput): taskId
        updateTask(TaskData: TaskData): taskId
        removeTask(taskId: String): taskId
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);