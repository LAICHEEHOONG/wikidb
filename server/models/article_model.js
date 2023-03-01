const mongoose = require('mongoose');

//this also work 这个也是可以使用
// const articleSchema = mongoose.Schema({
//     title: {type: String, trim: true},
//     content: {type: String, trim: true}
// });

const articleSchema = {
    title: {type: String, trim: true},
    content: {type: String, trim: true}
};

const Articles = mongoose.model('Articles', articleSchema);
module.exports = { Articles };