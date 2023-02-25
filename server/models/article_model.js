const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    article: {type: String, trim: true}
});

const Articles = mongoose.model('Articles', articleSchema);
module.exports = { Articles };