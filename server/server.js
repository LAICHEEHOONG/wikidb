const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/?retryWrites=true&w=majority`

mongoose.set('strictQuery', true);
mongoose.connect(mongoUri);






app.use(express.urlencoded({extended: false}));
app.use(express.json());

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})




