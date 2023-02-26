const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title: {type: String, trim: true}
});

const Articles = mongoose.model('Articles', articleSchema);
module.exports = { Articles };