const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const typeSchema = new Schema({
    name: {type: String, enum:['red', 'white', 'sparkling']},
    possibleVarietals: [{ type: Schema.Types.ObjectId, ref: "Varietal" }]
});

const Type = mongoose.model("Type", typeSchema);

module.exports = Type;