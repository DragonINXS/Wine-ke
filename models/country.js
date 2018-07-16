const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    name: String,
    possibleRegions: [{ type: Schema.Types.ObjectId, ref: "Region" }],
    countryFoodPairings: [String]
});

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;