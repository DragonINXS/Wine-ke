const express = require('express');
const router = express.Router();
const ensureLogin = require('connect-ensure-login');

const User = require('../../models/user');
const Suggestion = require('../../models/suggestion');

router.get('/suggestions/new', (req, res, next) => {
    res.render('users/suggestionNew');
});

router.post('/suggestions/create', (req, res, next) => {
    const newSuggestion = {
        suggestion: req.body.suggestion,
        suggestioner: req.user._id
    };
    Suggestion.create(newSuggestion)
        .then((result) => {
            res.redirect('/suggestions');
        })
        .catch(err => next(err));
});

router.get('/suggestions', (req, res, next) => {
    Suggestion.find()
        .populate('suggestioner')
        .then(allSuggestions => {
            // let isSuggestioner = false;

            allSuggestions.forEach(oneSugg => {
                oneSugg.isSuggestioner = false;
                if ((oneSugg.suggestioner._id).equals(req.user._id)) {
                    oneSugg.isSuggestioner = true;
                }
            });
            res.render('users/suggestions', { allSuggestions: allSuggestions });
        })
        .catch(err => next(err));
});

router.get('/suggestions/:id/edit', (req, res, next) => {
    const suggId = req.params.id;
    Suggestion.findById(suggId)
        .then(foundSuggestion => {
            // console.log(' = = = =  =', foundSuggestion);
            User.findById(foundSuggestion.suggestioner)
                .then(foundUser => {
                    res.render('users/suggestionEdit', { suggestion: foundSuggestion, theSuggestioner: foundUser });
                })
                .catch(err => next(err));
        })
        .catch(err => next(err));
});

router.post('/suggestions/:id/update', (req, res, next) => {
    const suggId = req.params.id;
    const updates = {
        suggestion: req.body.editedSuggestion
    };
    Suggestion.findByIdAndUpdate(suggId, updates)
        .then(() => {
            res.redirect('/suggestions');
        })
        .catch(err => next(err)); 
});

router.post('/suggestions/:id/delete', (req, res, next) => {
    Suggestion.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/suggestions');
        })
        .catch(err => next(err));
});

// ==============================================================================

// //takes you to new review form
// router.get('/suggestions/:id/new', (req, res, next) => {
//     User.findById(req.params.id)
//         .then((theUser) => {
//             res.render('suggestion/movieReviewAdd', {movie: theMovie});
//         })
//         .catch(err => console.log('Error while adding movie review: ', err));
// });

// //posts review to DB 
// router.post('/movies/:id/reviews/create', (req, res, next) => {
    
//     //first argument is what you want to find, second is the update you want to run
//     Movie.findByIdAndUpdate(req.params.id, { $push: { reviews: req.body } })
//         .then(() => {
//             res.redirect(`/movies/${req.params.id}`);
//         })
//         .catch(err => console.log('Error while creating movie review: ', err));
// });

// //deletes review from DB
// router.post('/movies/:id/reviews/delete/:reviewIndex', (req, res, next) => {
//     const movieID = req.params.id;
//     const reviewIndex = req.params.reviewIndex;
//     Movie.findById(movieID)
//         .then((theMovieThatImEditing) => {
//             theMovieThatImEditing.reviews.splice(reviewIndex, 1);
//             theMovieThatImEditing.save()
//                 .then(() => {
//                     res.redirect('/movies/' + movieID);
//                 })
//                 .catch(err => console.log('Error while saving the deleted review: ', err));
//         })
//         .catch(err => console.log('Error while splicing/deleting a review: ', err));  
// });

module.exports = router;