const { NONAME } = require('dns');
const express = require('express');
const path = require('path');

const PORT = 8080;
const static_dir = path.join(__dirname, 'static');

const app = express();
app.use(express.static(static_dir));
app.set('view engine', 'ejs');

const db = {
    stuff: [
        {id: 100, title: 'colors', values: ['yellow', 'blue', 'green', 'black', 'red']},
        {id: 101, title: 'animals', values: ['bird', 'weasel', 'bat', 'stork', 'hippo']},
        {id: 102, title: 'quotes', values: ['none shall pass', 'what is...your favorite color?', 'and the Lord did grin']},
    ]
 };
 
 app.get('/main', (req, res) =>{
    res.render('main', {
        items: db.stuff
    })
 })

app.get('/list/:id', (req, res) =>{
    console.log("They asked for list " + req.params.id)
    const id = parseInt(req.params.id)
    
    let item = null 
    for (let elt of db.stuff) {
        console.log(elt)
        if (elt.id === id){
            item = elt
            break
        }
        console.log(item)
    }
     


    res.render('list', {
    })
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
