const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
	name: { type: String },
	description: { type: String },
    reviews: [{ type: mongoose.Types.ObjectId, ref: 'Review' }]

});

// userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Article', articleSchema);
