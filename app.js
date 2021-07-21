const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 3000


//Middlewares
app.use('/posts', (req, res , next) => {
    console.log('Thid is middleware logging')
    next()
});

//ROUTES
app.get('/', (req, res) => {
    res.send('we are on HOME')
});

app.get('/posts', (req,res) => {
    res.send('we are on posts')
});

//Connect to DB
mongoose.connect('mongodb+srv://tamilselvanguru:@mongo4ME@cluster0.1tjkr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB')
);




app.listen(port, () => console.log(`Example app listening on port ` + port))