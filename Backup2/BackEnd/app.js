
import Express from 'express';
import { getCustomer, SetCustomer, Login, CustomerContact } from './Services/query.js';
import cors from 'cors';
import axios from 'axios';

const app = Express();
const port = 2021;

app.use(cors())
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json({ extended: true }));

//getCustomer("viva@gmail.com");

app.post('/CustomerRegister', function (req, res) {
    SetCustomer(req);
    //console.log(req.body);
    res.redirect('http://localhost:3000/Profile')
})

app.post('/Contact', function (req, res) {
    CustomerContact(req);
    //console.log(req.body);
    res.redirect('http://localhost:3000/Profile')
})

app.post('/Login', function (req, res) {

    //console.log(req.body);
    const logged = Login(req, res);
    logged.then(function(result){
        if(result){
            res.redirect('http://localhost:3000/Profile')
        }else{
            res.redirect('http://localhost:3000/Login')
        }
    })
  
  
})

app.get('/', function (req, res) {
    res.send('Hello')
})

app.listen(port, () =>
    console.log(`app running on http://localhost:${port}`));