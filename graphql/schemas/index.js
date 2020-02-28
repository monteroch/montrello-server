const { buildSchema } = require('graphql');

module.exports = buildSchema(`

type Task{
    _id: String!
    text: String!
    createdAt: String!
    status: String!
}

input TaskInput{
    text: String!
    createdAt: String!
    status: String!
}

type RootQuery {
    loadTask(taskId: String): Task
    loadTasks(): [Task]
}

type RootMutation {
    addTask(TaskInput: TaskInput): String
    updateTask(taskId: String): String
    removeTask(taskId: String): String
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`)