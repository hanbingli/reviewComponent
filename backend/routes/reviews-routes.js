const express = require ('express');

const { check } = require('express-validator');

const reviewsControllers = require('../controllers/reviews-controllers')

const router = express.Router();



router.get('/:artId', reviewsControllers.getReviews);

router.get('/:artId/rating', reviewsControllers.getRating);

router.post('/:artId', reviewsControllers.addReview);

router.patch('/:revId/like', reviewsControllers.likeReview);
router.patch('/:revId/likeC', reviewsControllers.cancelLikeReview);

router.patch('/:revId/dislike', reviewsControllers.dislikeReview);
router.patch('/:revId/dislikeC', reviewsControllers.cancelDislikeReview);

// router.patch('/:revId/dislike', reviewsControllers.dislikeReview);



// router.post('/:uid', 
//     [check('title')
//         .not()
//         .isEmpty(),
// ],
//     itemsControllers.createItem);

// router.patch('/:iid', itemsControllers.completeItem);

// router.patch('/:uid/:iid', 
//         [check('title')
//         .not()
//         .isEmpty(),
//         ],
//         itemsControllers.editItem);

// router.delete('/:uid/:iid', itemsControllers.deleteItem);




// router.post('/:uid/:iid', itemsControllers.addTag);


module.exports= router;