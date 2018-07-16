const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    password: String,
    history: [{type: Schema.Types.ObjectId, ref: "Selection"}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;