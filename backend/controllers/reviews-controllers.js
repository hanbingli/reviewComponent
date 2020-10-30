const HttpError = require('../models/http-error')
const mongoose = require('mongoose');


const Review = require('../models/review');
const Article = require('../models/article');


const getReviews = async (req, res, next) => {
    const articleId = req.params.artId;

    let reviews;
    try {
        reviews = await Review.find({ article: articleId });
    } catch (err) {
        const error = new HttpError('Fetching reviews failed, please try again later', 500);

        return next(error);
    }

    if (reviews.length === 0) {
        return res.status(404)
            .json({ messsage: 'Could not reviews for this user' })
    }

    res.json({ reviews: reviews.map(r => r.toObject({ getter: true })) })

};


const getRating = async (req, res, next) => {
    const articleId = req.params.artId;
    const pipeLineArticleId = new mongoose.Types.ObjectId(articleId.toString())

    console.log(articleId)
    console.log(pipeLineArticleId)

    let aggregateData;
    let ratings;
    let average;

    

    try {
        aggregateData = await Review.aggregate([
            // { $match: { 'article': pipeLineArticleId} },
            // !!!!!!!!!!!!!Problem
            // mongoose doesn't work with match. 
            { 
                $group: {
                     _id: "$article",
                    averageRating: { $avg: "$rating" }
            }
        }
        ]);
   
            console.log(aggregateData)
    } catch (err) {
        const error = new HttpError('Fetching average score failed, please try again later', 500);

        return next(error);
    }

    try {
        ratings= await  Review.aggregate([
            // { $match: { 'article': pipeLineArticleId} },
            // !!!!!!!!!!!!!Problem
            // mongoose doesn't work with match. 
            { 
                $group: {
                     _id: "$rating",
                    count: { $sum: 1 }
            }
        }
        ]);
   
            console.log(aggregateData)
            console.log(ratings)
    } catch (err) {
        const error = new HttpError('Fetching average score failed, please try again later', 500);

        return next(error);
    }
    // average = aggregateData.map(d=> d._id === articleId)
    // console.log(average[0].averageRating)
    res.json({ average: aggregateData[0].averageRating, ratings: ratings })

};



const addReview = async (req, res, next) => {

    const articleId = req.params.artId;

    const { title, creator, creatorEmail, date, content, rating } = req.body;

    const createdReview = new Review({
        title,
        creator,
        creatorEmail,
        date,
        content,
        article: articleId,
        rating
    });

    let targetArticle;
    try {
        targetArticle = await Article.findById(articleId)
    } catch (err) {
        const error = new HttpError('Adding review failed(cannot find article), please try again.', 500)
        return next(error)
    }

    if (!targetArticle) {
        const error = new HttpError('Could not find article for provided id.', 404)
        return next(error)
    }

    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await createdReview.save({ session: sess });
        targetArticle.reviews.push(createdReview);
        await targetArticle.save({ session: sess });
        await sess.commitTransaction()

    } catch (err) {
        const error = new HttpError('Adding review failed, please try again.', 500);
        return next(error);
    }


    res.status(201).json({ review: createdReview.toObject({ getter: true }) })


};




const likeReview = async (req, res, next) => {

    const reviewId = req.params.revId;


    let targetReview;
    try {
        targetReview = await Review.findOneAndUpdate(
            {_id :reviewId}, 
            {$inc : {'likes' : 1}}, 
            {new: true })
            .exec((err, result)=>{
                if(err){
                    return res.status(400).json({error: err})
                }else{
                    res.json(result)
                }
            });


    } catch (err) {
        const error = new HttpError('Liking review failed(cannot find review), please try again.', 500)
        return next(error)
    }


    res.status(201).json({ targetReview: targetReview.toObject({ getter: true }) })

}

const cancelLikeReview = async (req, res, next) => {

    const reviewId = req.params.revId;


    let targetReview;
    try {
        targetReview = await Review.findOneAndUpdate(
            {_id :reviewId}, 
            {$inc : {'likes' : -1}}, 
            {new: true })
            .exec((err, result)=>{
                if(err){
                    return res.status(400).json({error: err})
                }else{
                    res.json(result)
                }
            });


    } catch (err) {
        const error = new HttpError('Canceling like failed(cannot find review), please try again.', 500)
        return next(error)
    }


    res.status(201).json({ targetReview: targetReview.toObject({ getter: true }) })

}


const dislikeReview = async (req, res, next) => {

    const reviewId = req.params.revId;


    let targetReview;
    try {
        targetReview = await Review.findOneAndUpdate(
            {_id :reviewId}, 
            {$inc : {'dislikes' : 1}}, 
            {new: true })
            .exec((err, result)=>{
                if(err){
                    return res.status(400).json({error: err})
                }else{
                    res.json(result)
                }
            });


    } catch (err) {
        const error = new HttpError('Liking review failed(cannot find review), please try again.', 500)
        return next(error)
    }


    res.status(201).json({ targetReview: targetReview.toObject({ getter: true }) })

}

const cancelDislikeReview = async (req, res, next) => {

    const reviewId = req.params.revId;


    let targetReview;
    try {
        targetReview = await Review.findOneAndUpdate(
            {_id :reviewId}, 
            {$inc : {'dislikes' : -1}}, 
            {new: true })
            .exec((err, result)=>{
                if(err){
                    return res.status(400).json({error: err})
                }else{
                    res.json(result)
                }
            });


    } catch (err) {
        const error = new HttpError('Canceling like failed(cannot find review), please try again.', 500)
        return next(error)
    }


    res.status(201).json({ targetReview: targetReview.toObject({ getter: true }) })

}





exports.getReviews = getReviews;
exports.getRating = getRating;
exports.addReview = addReview;
exports.likeReview = likeReview;
exports.cancelLikeReview = cancelLikeReview;
exports.dislikeReview = dislikeReview;
exports.cancelDislikeReview = cancelDislikeReview;