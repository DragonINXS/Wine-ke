const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const selectionSchema = new Schema({
    type: {type: Schema.Types.ObjectId, ref: "Type"},
    varietal: {type: Schema.Types.ObjectId, ref: "Varietal"},
    country: {type: Schema.Types.ObjectId, ref: "Country"},
    region: {type: Schema.Types.ObjectId, ref: "Region"},
    user: {type: Schema.Types.ObjectId, ref: "User"}
});

const Selection = mongoose.model("Selection", selectionSchema);

module.exports = Selection;