const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');

const app = express();

// Handlebars middlewares - This will tell the system that we want to use handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Express static - To load assets from public folder
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('index',{
        title: "title"
    })
})

const port = 5000;

app.listen(port, () =>{
    console.log(`Server started ${port}`)
})

// 04142644455