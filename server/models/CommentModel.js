const mongoose = require("mongoose");
const Schema = mongoose.Schema
const CommentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: [String],
        required: true,
    },
    comment: {
        type: [String],
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('CommentModel', CommentSchema);

