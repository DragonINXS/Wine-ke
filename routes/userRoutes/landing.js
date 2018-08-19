const express = require('express');
const router = express.Router();
const ensureLogin = require('connect-ensure-login');

const User = require('../../models/user');
const Selection = require('../../models/selection');
const Varietal = require('../../models/varietal');
const Country = require('../../models/country');
const Region = require('../../models/region');
const Type = require('../../models/type');
 
// ,  ensureLogin.ensureLoggedIn('/')

router.get('/wines',   (req, res, next) => {
    // console.log(">>>>>>>>>>>>>>>>>>>>>>> routeing to wines url <<<<<<<<<<<<")
    // res.render('users/landingPage');
    Type.find()
        .then(allTypes => {
            // console.log("all the types >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ", allTypes)
            Varietal.find()
                .then((allVarietal) => {
                    // console.log("varietals ============================== ", allVarietal)
                    Country.find()
                        .then((allCountries) => {
                            // console.log("all the countries :::::::::::::::::::::::::::::::: ", allCountries)
                            Region.find()
                                .then((allRegions) => {
                                    // console.log("all the regions }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} ", allRegions)
                                    var data = {
                                        types: allTypes,
                                        varietals: allVarietal,
                                        countries: allCountries,
                                        regions: allRegions
                                    };
                                    res.render('users/landingPage', data);
                                })
                                .catch(err => console.log('Error while finding allRegions: ', err));
                        });
                });
        })
        .catch(err => console.log('Error while finding allTypes: ', err));
    });
    


module.exports = router;