require('dotenv').config()
const jwt = require('jsonwebtoken')
const express = require('express');

const app = express();
const port = 1020

app.get('/login', (req,res) => {
    //user log in successfully.
    const token = jwt.sign({ name: 'Shimon'}, '12345')
    res.status(200).json({ accessToken: token });
})

app.post('/private-route', (req,res) => {
   const token  = req.header("x-api-token");

    try{
        const decoded = jwt.verify(token, '12345')
        res.send(`welcome ${decoded.name}, you are now authenticated`)
    } catch(err){
        console.log(err);
        res.send('go away you are not authenticated')
    }
})
app.listen(port, 
    console.log(`http://localhost:${port}`))