const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regionPairingSchema = new Schema({
    varietal: Schema.Types.ObjectId,
    // countryId: Schema.Types.ObjectId,
    region: Schema.Types.ObjectId,
    pairings: [String]
    


    // type: { type: Schema.Types.ObjectId, ref: "Type" },
    // possibleCountries: [{ type: Schema.Types.ObjectId, ref: "Country" }],
});

const RegionPairing = mongoose.model("RegionPairing", regionPairingSchema);

module.exports = RegionPairing;