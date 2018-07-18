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
//             'General: light/medium dishes w/ citrus and/or green herbs',
            
//             'Seafood',
//             'Sushi',
//             "Vietmanese",
//             "Thai",
//             'Carribean Seafood',
//             'Mexican',
//             'Fruit',
//             'Avacado',
//             'Cheese: fresh/soft cheese(mozzarella, cream cheese, etc), Monterey Jack, Provolone, Swiss, Gruyere',

//             'AVOID: heavy dishes '
//         ]
//     },
// ];

// //regions
// const bordeaux = { _id: new mongoose.Types.ObjectId(), name: 'Bordeaux', countrystring: 'France' };
// const loire = { _id: new mongoose.Types.ObjectId(), name: 'Loire', countrystring: 'France' };

// const california = { _id: new mongoose.Types.ObjectId(), name: 'California', countrystring: 'USA' };

// const riasBaixas  = { _id: new mongoose.Types.ObjectId(), name: 'Rias Baixas', countrystring: 'Spain' };

// const vinhoVerde = { _id: new mongoose.Types.ObjectId(), name: 'Vinho Verde', countrystring: 'Portugal' };


// const regions = [bordeaux, loire, california, riasBaixas, vinhoVerde];


// //countries
// const france = { _id: new mongoose.Types.ObjectId(), name: 'France', possibleRegions: [bordeaux._id, loire._id] };
// const usa = { _id: new mongoose.Types.ObjectId(), name: 'USA', possibleRegions: [california._id] };
// const spain = { _id: new mongoose.Types.ObjectId(), name: 'Spain', possibleRegions: [riasBaixas._id] };
// const portugal = { _id: new mongoose.Types.ObjectId(), name: 'Portugal', possibleRegions: [vinhoVerde._id] };

// const countries = [france, usa, spain, portugal];


// //varietals
// const cabernetFranc = { _id: new mongoose.Types.ObjectId(), name: 'Cabernet Franc', typestring: 'red', possibleRegions: [bordeaux._id, loire._id, california._id] };
// const albarino = { _id: new mongoose.Types.ObjectId(), name: 'Albarino', typestring: 'white', possibleRegions: [riasBaixas._id, vinhoVerde._id, california._id] };

// const varietals = [cabernetFranc, albarino];


// //types
// const red = { _id: new mongoose.Types.ObjectId(), name: 'red', possibleVarietals: [cabernetFranc._id] };
// const white = { _id: new mongoose.Types.ObjectId(), name: 'white', possibleVarietals: [albarino._id] };

// const types = [red, white];


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




// Beef (Braised, Grilled, Roasted, Stewed), Cheese (Aged, Stinky, Blue, Brie, Gorgonzola), Chocolate (Dark), Duck (Roasted), Filet Mignon, Game, Game Birds, Hamburgers (Grilled), Lamb (Braised, Griilled, Roasted, Rack of), Red Meat (Braised, Cured, Grilled, Roasted, Smoked, Fatty), Mint, Black Pepper, Rosemary, Squab (Grilled), Steak (Grilled, Rare w/ Young Wine), Tyme, Venison (Grilled, Roasted), McDonald (Big Mac, Burgers), Wendy's (Burgers), Burger King (Whopper, Burgers). Avoid (Delicate Dishes, Fish (Smoked), Fruit, Oysters, Seafood, Shellfish, Spicy Dishes)

// const varietals = [
//     {
//         name: 'Cabernet Franc',
//         type: {
//             name: 'red'
//         },
//         possibleCountries: [
//             {
//                 name: 'USA',
//                 possibleRegions: [
//                     {
//                         name: 'California',
//                         regionFoodPairings: [
//                             'Pairing1',
//                             'Pairing2',
//                             'Pairing3'
//                         ]
//                     }
//                 ],
//                 countryFoodPairings: [
//                     'Pairing1',
//                     'Pairing2',
//                     'Pairing3'
//                 ]
//             },
//             {
//                 name: 'France',
//                 possibleRegions: [
//                     {
//                         name: 'Bordeaux',
//                         regionFoodPairings: [
//                             'Pairing1',
//                             'Pairing2',
//                             'Pairing3'
//                         ],
//                     },
//                     {
//                         name: 'Loire',
//                         regionFoodPairings: [
//                             'Pairing1',
//                             'Pairing2',
//                             'Pairing3'
//                         ],
//                     }
//                 ],
//                 countryFoodPairings: [
//                     'Pairing1',
//                     'Pairing2',
//                     'Pairing3'
//                 ]
//             }
//         ],
        
//     }
// ];


// // use .create() to create entries in DB
// Varietal.create(varietals)
//     .then(varietals => {
//         varietals.forEach(oneVarietal => {
//             console.log('In DB: ', oneVarietal.name);
//         });
//         mongoose.disconnect();
//     })

//     .catch(err => console.log('Error while creating seeds: ', err));
