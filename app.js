const express = require('express')
const app = express()
const port = 3000
app.listen(port, () => console.log(`Example app listening on port ` + port))

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