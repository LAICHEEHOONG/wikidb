const express = require('express');
let router = express.Router();
const { Articles } = require('../models/article_model');



router.route('/')
    .get(async (req, res) => {
        try {
            const allArticlesData = await Articles.find({});
            console.log(allArticlesData);
            res.status(200).json({ data: allArticlesData });

        } catch (error) {
            console.log(error);
            res.json({ message: 'find all error', error });
        }
    })
    .post(async (req, res) => {
        try {
            const newArticle = new Articles({ title: req.body.title, content: req.body.content });
            await newArticle.save();
            // res.status(200).json({ message: 'successful save' });
            res.send("Successfully added a new article.")

        } catch (error) {
            console.log(error);
            res.json({ message: 'find all error', error });
            // res.send(error);

        }
    })
    .delete(async(req, res) => {
        try {
            await Articles.deleteMany();
            res.send("Successfully deleted all articles.");
        } catch(error) {
            res.json({ message: 'test delete error', error });
        }
    })

router.route('/:articleTitle')
    .get(async(req, res) => {
        try {
            const titleParams = req.params.articleTitle;
            const findTitle = await Articles.findOne({title: titleParams});
            
            console.log(findTitle);
            res.send(findTitle);

        } catch(error) {
            console.log(error);
            res.json({ message: 'find one error', error });
        }
    })
// testing save title data
// router.route('/test')
//     .post(async (req, res) => {
//         try {
//             const postTitle = req.body.title;
//             const postContent = req.body.content;
//             const saveTitle = new Articles({ title: postTitle, content: postContent });

//             await saveTitle.save();

//             res.status(200).json({ message: 'test title successful save' });
//         } catch (error) {
//             console.error(error);
//             res.json({ message: 'test save title error', error });
//         }
//     })
// 输入老师给的资料
// router.route('/input_example')
//     .get(async (req, res) => {
//         try {

//             const arrExample = [
//                 {
//                     "title": "API",
//                     "content": "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer."
//                 },
//                 {
//                     "title": "Bootstrap",
//                     "content": "This is a framework developed by Twitter that contains pre-made front-end templates for web design"
//                 },
//                 {
//                     "title": "DOM",
//                     "content": "The Document Object Model is like an API for interacting with our HTML"
//                 }
//             ];

//             const saveInput = async (obj) => {
//                 try {
//                     await new Articles({ title: obj.title, content: obj.content }).save();
//                     console.log('save');
//                 } catch (error) {
//                     console.log(error);
//                     return;
//                 }
//             }

//             arrExample.forEach(obj => {
//                 saveInput(obj);
//             })

//             // console.log('done');
//             res.json({ message: 'done input example data' });
//         } catch (error) {
//             console.log(error);
//             res.json({ message: 'input example error', error });
//         }
//     })


module.exports = router;