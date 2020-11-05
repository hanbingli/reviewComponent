const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    title: { type: String, required: true },
    rating: { type: Number },
    content: { type: String },
    date: { type: Date,  default: Date.now },
    creator: { type: String, required: true },
    creatorEmail: { type: String },
    article: { type: mongoose.Types.ObjectId, required: true,  ref: 'Article' },
    likes: { type: Number, default:0 },
    dislikes: { type: Number , default:0 }, 
    img: {type: String }, 
    pros: [ { type: String }],
    cons: [ { type: String }]
    
});


module.exports = mongoose.model('Review', reviewSchema);


