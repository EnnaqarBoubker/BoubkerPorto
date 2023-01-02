const mongoose = require("mongoose");
const BlogModel = require('./BlogsModel')
const Schema = mongoose.Schema
const CommentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true
    },
    blog : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogModel'
    },
    date: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('CommentModel', CommentSchema);

