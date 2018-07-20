const mongoose = require('mongoose');
const User = require('../models/user');
const Selection = require('../models/selection');
const Varietal = require('../models/varietal');
const Country = require('../models/country');
const Region = require('../models/region');
const Type = require('../models/type');

const VarietalRegionPairing = require('../models/varietalRegionPairing');

const dbName = 'wine-ke';
mongoose.connect(`mongodb://localhost/${dbName}`);



//======================= ASSIGNS OBJECT IDS POST SEED ================================

//---------- countrystring -> country id --------------
// Region.find()
//     .then(allRegions => {
//         allRegions.forEach(aRegion => {
//             Country.findOne({ name: aRegion.countrystring })
//                 .then(aCountry => {
//                     aRegion.parentCountry = aCountry._id;
//                     aRegion.save();
//                 });
//         });
//     });


//-------- regionstring -> region id -----------
// VarietalRegionPairing.find()
//     .then(allVarietalRegionPairings => {
//         allVarietalRegionPairings.forEach(aVarietalPairing => {
//             Region.findOne({ name: aVarietalPairing.regionstring })
//                 .then(aRegion => {
//                     aVarietalPairing.region = aRegion._id;
//                     aVarietalPairing.save();
//                 });
//         });
//     });


//-------- varietalstring -> varietal id ---------
// VarietalRegionPairing.find()
//     .then(allVarietalRegionPairings => {
//         allVarietalRegionPairings.forEach(aVarietalPairing => {
//             Varietal.findOne({ name: aVarietalPairing.varietalstring })
//                 .then(aVarietal => {
//                     aVarietalPairing.varietal = aVarietal._id;
//                     aVarietalPairing.save();
//                 });
//         });
//     });

//------------ typestring -> type id ------------------
// Varietal.find()
//     .then(allVarietals => {
//         allVarietals.forEach(aVarietal => {
//             Type.findOne({ name: aVarietal.typestring })
//                 .then(aType => {
//                     aVarietal.type = aType._id;
//                     aVarietal.save();
//                 });
//         });
//     });


//============================= SEEDS ====================================================

// //regional pairings
// const regionPairings = [
//     {
//         varietalstring: 'Cabernet Franc',
//         regionstring: 'Loire',
//         pairings: [
//             // 'beef: roasted, stewed, braised grilled',
//             // 'lamb: roasted, braised, grilled, Rack of',
//             // 'duck: roasted',
//             'AVOID: light/delicate dishes, seafood, shellfish, fruit, spicy dishes',
            
//             'cheese: aged, stinky, (Blue, Brie, Gorgonzola)',
//             'chocolate: dark',
//             'burgers',
//             'vegetables: roasted',
//             'vegetarian',
//             'stirfry: w/ red meats',
//             'chinese food: w/ red meats and crunchy vegetables'
//         ]
//     },

//     {
//         varietalstring: 'Albarino',
//         regionstring: 'Rias Baixas',
//         pairings: [
    
//             'seafood',
//             'sushi',
//             "vietnamese",
//             "thai",
//             'carribean seafood',
//             'mexican',
//             'fruit',
//             'avacado',
//             'cheese: fresh/soft cheese(mozzarella, cream cheese, etc), Monterey Jack, Provolone, Swiss, Gruyere',
    
//             'GENERAL: light/medium dishes w/ citrus and/or green herbs',
//             'AVOID: heavy dishes '
//         ]
//     },
// ];

//regions
const bordeaux = { _id: new mongoose.Types.ObjectId(), name: 'Bordeaux', countrystring: 'France' };
const loire = { _id: new mongoose.Types.ObjectId(), name: 'Loire', countrystring: 'France' };

const california = { _id: new mongoose.Types.ObjectId(), name: 'California', countrystring: 'USA' };

const riasBaixas  = { _id: new mongoose.Types.ObjectId(), name: 'Rias Baixas', countrystring: 'Spain' };

const vinhoVerde = { _id: new mongoose.Types.ObjectId(), name: 'Vinho Verde', countrystring: 'Portugal' };


const regions = [bordeaux, loire, california, riasBaixas, vinhoVerde];


//countries
const france = { _id: new mongoose.Types.ObjectId(), name: 'France', possibleRegions: [bordeaux._id, loire._id] };
const usa = { _id: new mongoose.Types.ObjectId(), name: 'USA', possibleRegions: [california._id] };
const spain = { _id: new mongoose.Types.ObjectId(), name: 'Spain', possibleRegions: [riasBaixas._id] };
const portugal = { _id: new mongoose.Types.ObjectId(), name: 'Portugal', possibleRegions: [vinhoVerde._id] };

const countries = [france, usa, spain, portugal];


//varietals
const cabernetFranc = { _id: new mongoose.Types.ObjectId(), name: 'Cabernet Franc', typestring: 'red', possibleRegions: [bordeaux._id, loire._id, california._id] };
const albarino = { _id: new mongoose.Types.ObjectId(), name: 'Albarino', typestring: 'white', possibleRegions: [riasBaixas._id, vinhoVerde._id, california._id] };

const varietals = [cabernetFranc, albarino];


//types
const red = { _id: new mongoose.Types.ObjectId(), name: 'red', possibleVarietals: [cabernetFranc._id] };
const white = { _id: new mongoose.Types.ObjectId(), name: 'white', possibleVarietals: [albarino._id] };

const types = [red, white];


// VarietalRegionPairing.create(regionPairings)
//     .then((responseVarietalRegionalPairings) => {
//         console.log(`Created ${responseVarietalRegionalPairings.length} regionalPairings`);
    
//         Region.create(regions)
//         .then((responseRegion) => {
//             console.log(`Created ${responseRegion.length} regions`);

//             Country.create(countries)
//             .then((responseCountry) => {
//                 console.log(`Created ${responseCountry.length} countries`);

//                 Varietal.create(varietals)
//                 .then((responseVarietal) => {
//                     console.log(`Created ${responseVarietal.length} varietals`);

//                     Type.create(types)
//                     .then((responseType) => {
//                         console.log(`Created ${responseType.length} types`);
//                         mongoose.disconnect();                     
//                     })
//                     .catch(err => console.log('Error while creating a Type: ', err));
//                 })
//                 .catch(err => console.log('Error while creating a Varietal: ', err));
//             })
//             .catch(err => console.log('Error while creating a Country: ', err));
//         })
//         .catch(err => console.log('Error while creating a Region: ', err));
//     })
//     .catch(err => console.log('Error while creating a RegionalPairing: ', err));

