const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const typeSchema = new Schema({
    name: String,
    possibleVarietals: [{ type: Schema.Types.ObjectId, ref: "Varietal" }]
});

const Type = mongoose.model("Type", typeSchema);

module.exports = Type;