const express = require('express');
const router = express.Router();
const exphbs  = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

// Load Idea Model
require('./models/Wedding');
const Wedding = mongoose.model('wedding');

// Load Reception Model
require('./models/Reception');
const Reception = mongoose.model('reception');

// Map global promise - get rid of warning in mongodb for promises
mongoose.Promise = global.Promise;

// Connect to mongoose(It can be local or remote)
mongoose.connect('mongodb://localhost/davsun-dev')
.then(()=>{
  console.log('MongoDB Conencted..')
})
.catch(err=> console.log(err))

// Handlebars middlewares - This will tell the system that we want to use handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Express static - To load assets from public folder
app.use(express.static(path.join(__dirname, 'public')));


// Body Parse middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index',{
        title: "title"
    })
})

app.post('/wedding', (req, res)=>{
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(req.body.email == '' || reg.test(req.body.email) == false ){
        res.render('index',{
            warning: "Kindly enter proper email format!",
            name: req.body.name,
            email: req.body.email
        })
    }else{
        console.log(req.body);
        const newWedding = {
            email: req.body.email,
            name: req.body.name,
            vote: req.body.wedding_vote
        }
        Wedding.findOne({
            email: req.body.email 
        })
        .then(wedding => {
            if(wedding!=null){
                console.log("already registerd");
                console.log(wedding);
                res.render('index',{
                    warning: "You're already registered for wedding!"
                })
            }else{
                console.log("first time login");
                new Wedding(newWedding)
                .save()
                .then(wedding =>{
                    res.render('index',{
                        msg: "success"
                    })
                })
            }
        }, (err) =>{
            res.render('index',{
                warning: "Some Internal error occured!"
            })      
        })   
    }         
});

// Reception Flow
app.post('/reception', (req, res)=>{
    console.log("Reception flow started>> ")
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(req.body.email == '' || reg.test(req.body.email) == false ){
        res.render('index',{
            warning_reception: "Kindly enter proper email format!",
            name: req.body.name,
            email: req.body.email
        })
    }else{
        console.log(req.body);
        const newReception = {
            email: req.body.email,
            name: req.body.name,
            vote: req.body.reception_vote
        }
        Reception.findOne({
            email: req.body.email 
        })
        .then(reception => {
            if(reception!=null){
                console.log("already registerd");
                console.log(reception);
                res.render('index',{
                    warning_reception: "You're already registered for reception!"
                })
            }else{
                console.log("first time login");
                new Reception(newReception)
                .save()
                .then(reception =>{
                    res.render('index',{
                        msg_reception: "success"
                    })
                })
            }
        }, (err) =>{
            res.render('index',{
                warning: "Some Internal error occured!"
            })      
        })   
    }         
});

const port = 5000;

app.listen(port, () =>{
    console.log(`Server started ${port}`)
})

