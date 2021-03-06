const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    history: [{ type: Schema.Types.ObjectId, ref: "Selection" }],
    role: { type: String, enum: ["admin", "user"], default: "user" }
    
});

const User = mongoose.model("User", userSchema);

module.exports = User;