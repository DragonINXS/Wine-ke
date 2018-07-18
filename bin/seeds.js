const mongoose = require('mongoose');
const User = require('../models/user');
const Selection = require('../models/selection');
const Varietal = require('../models/varietal');
const Country = require('../models/country');
const Region = require('../models/region');
const Type = require('../models/type');


const dbName = 'wine-ke';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const regions = [
//     {
//         name: 'Burgundy',

//     }
// ]


const varietals = [
    {
        name: 'Pinot Noir',
        type: {
            name: 'red'
        },
        possibleCountries: [
            {
                name: 'USA',
                possibleRegions: [
                    {
                        name: 'Oregon',
                        regionFoodPairings: [
                            'Pairing1',
                            'Pairing2',
                            'Pairing3'
                        ],
                    },
                    {
                        name: 'California',
                        regionFoodPairings: [
                            'Pairing1',
                            'Pairing2',
                            'Pairing3'
                        ]
                    }
                ],
                countryFoodPairings: [
                    'Pairing1',
                    'Pairing2',
                    'Pairing3'
                ]
            },
            {
                name: 'France',
                possibleRegions: [
                    {
                        name: 'Burgundy',
                        regionFoodPairings: [
                            'Pairing1',
                            'Pairing2',
                            'Pairing3'
                        ]
                    }
                ],
                countryFoodPairings: [
                    'Pairing1',
                    'Pairing2',
                    'Pairing3'
                ]
            }
        ],
        
    }
];


// use .create() to create entries in DB
Varietal.create(varietals)
    .then(varietals => {
        varietals.forEach(oneVarietal => {
            console.log('In DB: ', oneVarietal.name);
        });
        mongoose.disconnect();
    })

    .catch(err => console.log('Error while creating seeds: ', err));
