const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Selection = require('../models/selection');
const Varietal = require('../models/varietal');
const Country = require('../models/country');
const Region = require('../models/region');
const Type = require('../models/type');



//gets varietals by type
router.get('/api/getVarietals/:typeID', (req, res, next) => {
    Varietal.find({ 'type': req.params.typeID })
        .then((relevantVarietals => {
            res.json(relevantVarietals);
            // console.log('Relevant varietals: ', relevantVarietals);
        }));
});

//gets regions by varietal ans only deliver the regions in a country
router.get('/api/populateRegions/:varietalID/:countryID', (req, res, next) => {
    // console.log('=======================================');
    // console.log(req.params.varietalID);
    const relevantRegions = [];
    Varietal.findById(req.params.varietalID)
        .populate('possibleRegions')
        .then((foundVarietal => {
            // console.log("Youre a foooooollll");
            foundVarietal.possibleRegions.forEach(function (aRegion) {
                // console.log(aRegion.parentCountry);
                // console.log(req.params.countryID);
                if (aRegion.parentCountry.equals(req.params.countryID)) { 
                    relevantRegions.push(aRegion);

                    
                }
                
                
                res.json(relevantRegions);
            });
        }));
});

//gets regions by varietal and finds the parent countries
router.get('/api/getRegions/:varietalID', (req, res, next) => {
    Varietal.findById(req.params.varietalID)
        .populate({path: 'possibleRegions', populate: {path: 'parentCountry'}})
        .then((foundVarietal => {

            res.json(foundVarietal);
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