const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const passport = require('passport');

// router.get('/signup', (req, res, next) => {
//     res.render('users/signupPage');
// });

router.post('/signup', (req, res, next) => {
    const thePassword = req.body.thePassword;
    const theUsername = req.body.theUsername;
    
    if (thePassword === "" || theUsername === "") {
        res.render('users/signupPage', { errorMessage: 'Please fill out Username and Password to create an account' });
        return;
    }
    
    User.findOne({ username: theUsername })
    .then((responseFromDB) => {
        if (responseFromDB !== null) {
            res.render('users/signupPage', { errorMessage: `Sorry Username: ${theUsername} is already taken` });
            return;
        }

        //hashes password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(thePassword, salt);
        
        User.create({ username: theUsername, password: hashedPassword })
            .then((createdUser) => {
                console.log('new user: ', createdUser);
                res.redirect('/wines');
            })
            .catch(err => console.log('Error while saving signup: ', err));
    });
});

// router.get('/login', (req, res, next) => {
//     res.render('/', {message: req.flash('error')});
// });

router.post("/login", passport.authenticate("local", {
    successRedirect: '/wines',
    failureRedirect: '/',
    failureFlash: true,
    passReqToCallback: true
}));

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});

router.get('/wines', (req, res, next) => {
    console.log('here');
    res.render('users/landingPage');
});

module.exports = router;


