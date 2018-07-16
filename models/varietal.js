const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const varietalSchema = new Schema({
    name: String,
    type: { type: Schema.Types.ObjectId, ref: "Type" },
    possibleCountries: [{ type: Schema.Types.ObjectId, ref: "Country" }],
    // countryFoodPairings: [String],
});

const Varietal = mongoose.model("Varietal", varietalSchema);

module.exports = Varietal;