const mongoose = require('mongoose');

const TodoItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true,
            "Title is required."
        ],
    },
    description: {
        type: String,
        required: [
            true,
            "Description is required."
        ],
    },
    status: {
        type: String,
        enum: ["Completed", "In Progress"],
        default: "In Progress",
        required: [
            true,
            "Completion status must be indicated as either 'Completed' or 'In Progress'."        ]
    },
    priority: {
        type: String,
        enum: ["High", "Normal", "Low"],
        required: [
            true,
            "Priority must be indicated as 'High', 'Normal', or 'Low'."
        ]
    },
}, {timestamps: true});

module.exports = TodoItemSchema;
module.exports.TodoItem = mongoose.model("TodoItem", TodoItemSchema);