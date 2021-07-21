const express = require('express');

const router = express.Router();

const Post = require('./models/Post');

router.get('/', (req,res) => {
    res.send('we are on posts')
});

router.get('/specific', (req,res) => {
    res.send('we are on specific')
});

router.post('/', (req, res) => {
    
});

module.exports = router;