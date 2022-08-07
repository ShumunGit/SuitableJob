const express = require('express');
const app = express();
const port = 2020;

const cors = require('cors');

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.get('/Login', function(req,res){
    res.send('logged')
})

app.get('/', function(req,res){
    res.send('Hello')
})

app.listen(port, ()=>
 console.log(`app running on http://localhost:${port}`));