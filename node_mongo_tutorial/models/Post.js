const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: String,
    content: String,
})

module.exports = mongoose.model("Post",schema)