const express = require('express');
const router = express.Router();

const User = require('../../models/user');
const Selection = require('../../models/selection');
const Varietal = require('../../models/varietal');
const Country = require('../../models/country');
const Region = require('../../models/region');
const Type = require('../../models/type');
 


router.get('/wines', (req, res, next) => {
    res.render('users/landingPage');
});









module.exports = router;