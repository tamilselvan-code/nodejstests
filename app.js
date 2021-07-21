const express = require('express')
const mongoose = require('mongoose');

require('dotenv').config();

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


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB')
);




app.listen(port, () => console.log(`Example app listening on port ` + port))