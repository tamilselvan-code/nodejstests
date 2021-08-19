const express = require('express');

const router = express.Router();

const Post = require('../models/Post');

//GET BACK ALL THE POSTS
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});

//SPECIFIC POST
router.get('/:postId', async (req,res) => {
    console.log(req.params.postId);
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err});
    }

});

//SUBMITS THE POST
router.post('/', async (req, res) => {
    console.log("inside Post");
    console.log(req.body);
    
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});

//DELETE THE SPECIFIC POST
router.delete('/:postId', async (req,res) => {
    console.log("inside delete post id: " + req.params.postId);
    try {
        const removedPost = await Post.deleteOne({_id : req.params.postId});
        res.json(removedPost);
    } catch (err) {
        res.json({message: err});
    }
});

//UPDATE THE SPECIFIC POST
router.patch('/', async (req,res) =>{
    try {
        const updatedPost = await Post.updateOne(
            {_id : req.body._id}, 
            {$set: {title: req.body.title, description: req.body.description}});
        res.json(updatedPost);  
    } catch (err) {
        res.json({message: err});
    }
});
module.exports = router;