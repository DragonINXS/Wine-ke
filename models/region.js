const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regionSchema = new Schema({ 
    name: String,
    parentCountry: { type: Schema.Types.ObjectId, ref: "Country" },
    countrystring: String,
});

const Region = mongoose.model("Region", regionSchema);

module.exports = Region;