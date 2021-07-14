const mongoose = require('mongoose');
const {Schema} = mongoose;


const todoSchema = new Schema({
    name: String,
    description: String
})

const Todo = mongoose.model('Todos', todoSchema);

module.exports = Todo;