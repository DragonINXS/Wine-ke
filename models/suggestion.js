const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./user');

const suggestionSchema = new Schema({
    suggestioner: { type: Schema.Types.ObjectId, ref: "User" },
    suggestion: String
    
});

const Suggestion = mongoose.model("Suggestion", suggestionSchema);

module.exports = Suggestion;