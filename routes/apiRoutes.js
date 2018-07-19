const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Selection = require('../models/selection');
const Varietal = require('../models/varietal');
const Country = require('../models/country');
const Region = require('../models/region');
const Type = require('../models/type');




router.get('/api/getVarietals/:typeID', (req, res, next) => {
    Varietal.find({ typeID: req.params.typeID })
        .then((relevantVarietals => {
            res.json(relevantVarietals);
        }));
});

//should we get countries through .possibleRegions???
router.get('/api/getCountries/:varietalID', (req, res, next) => {
    Varietal.find({ varietalID: req.params.varietalID })
        .then((relevantCountries => {
            res.json(relevantCountries);
        }));
});


router.get('/api/getRegions/:varietalID', (req, res, next) => {
    Varietal.find({ varietalID: req.params.varietalID })
        .then((relevantRegions => {
            res.json(relevantRegions);
        }));
});






//     Type.findById(req.params.typeID).populate('possibleVarietals')
//         .populate('possibleRegions')
        
//         .then(theType => {
//             let regArr = [];
//             theType.possibleVarietals.forEach(oneVar => {
//                 oneVar.possibleRegions.forEach(oneRegId => {
//                     Region.findById(oneRegId)
//                         .then(oneReg => {
//                             regArr.push(oneReg);
//                             const countryId = oneReg.parentCountry;
//                             Country.findById(countryId)
//                                 .then(theCountry => {
//                                     let data = {
//                                         types: theType,
//                                         varietals: oneVar,
//                                         countries: theCountry,
//                                         regions: regArr
//                                     };
                                    
//                                     res.json(data)
//                                 })
//                                 .catch(err => next(err));
//                         })
//                         .catch(err => next(err));
//                 });
//             });
//         })
//         .catch(err => next(err));
// });

module.exports = router;