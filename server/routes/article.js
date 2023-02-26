const express = require('express');
let router = express.Router();
const { Articles } = require('../models/article_model');

// testing save title data
router.route('/test')
    .post(async (req, res) => {
        try {
            let postTitle = req.body.title;
            const saveTitle = new Articles({ title: postTitle });

            await saveTitle.save();

            res.status(200).json({ message: 'test title successful save' });

        } catch (error) {
            console.log(error);
            res.json({ message: 'test save title error', error });
        }
    })


module.exports = router;