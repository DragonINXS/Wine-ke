const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regionSchema = new Schema({
    name: String,
    regionFoodPairings: [String]
});

const Region = mongoose.model("Region", regionSchema);

module.exports = Region;