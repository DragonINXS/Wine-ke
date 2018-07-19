const express = require('express');
const router = express.Router();
const ensureLogin = require('connect-ensure-login');

const User = require('../../models/user');
const Selection = require('../../models/selection');
const Varietal = require('../../models/varietal');
const Country = require('../../models/country');
const Region = require('../../models/region');
const Type = require('../../models/type');
 


router.get('/wines',  ensureLogin.ensureLoggedIn('/'),(req, res, next) => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>> routeing to wines url <<<<<<<<<<<<")
    // res.render('users/landingPage');
    Type.find()
        .then(allTypes => {
            console.log("all the types >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ", allTypes)
            Varietal.find()
                .then((allVarietal) => {
                    console.log("varietals ============================== ", allVarietal)
                    Country.find()
                        .then((allCountries) => {
                            console.log("all the countries :::::::::::::::::::::::::::::::: ", allCountries)
                            Region.find()
                                .then((allRegions) => {
                                    console.log("all the regions }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} ", allRegions)
                                    var data = {
                                        types: allTypes,
                                        varietals: allVarietal,
                                        countries: allCountries,
                                        regions: allRegions
                                    };
                                    res.render('users/landingPage', data);
                                })
                                .catch(err => console.log('Error while finding allTypes: ', err));
                        });
                });
        })
        .catch(err => console.log('Error while finding allTypes: ', err));
    });
    
// const wineApi = axios.create({
//         baseURL: '/'
// })
    
// function getVartietalInfo(id) {
//     wineApi.get(id)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => console.log('Error while getting VarrietalInfo'));
// }

//---------DONT THINK THIS IS RIGHT----------------
// document.getElementById("#").somethingHappens = function () {
//     getVartietalInfo('1');
// };


//-------------EXAMPLE----------------------------
    // const pokeApi = axios.create({
    //     baseURL: 'http://pokeapi.co/api/v2/pokemon'
    // })
    
    // function getPokemonInfo(id) {
    //   pokeApi.get(id)
    //   .then(response => {
    //     console.log(response.data)
    //   })
    //   .catch(err => {
    //     console.error(err)
    //   })
    // }
    
    // document.getElementById("pokeButton").onclick = function(){
    //   getPokemonInfo("1");
    // }






module.exports = router;