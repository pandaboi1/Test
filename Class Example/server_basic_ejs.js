const express = require('express');
const path = require('path');

const PORT = 8080;
const static_dir = path.join(__dirname, 'static');

const app = express();
app.use(express.static(static_dir));
app.set('view engine', 'ejs');

const db = {
    name: 'Maria',
    list: [
        'Ambassador Ebony',
        'Diplomat Hazy Snare Side',
        'Emperor Renaissance',
        'Pinstripe Clear',
        'Powerstroke 77 Clear Dot'
    ],
    product: {
        Family: 'K',
        Type: 'HiHat',
        Product: 'Trash Crash'
    }
};

app.get('/exampleRoute', (req, res) =>{
    res.render('exampleRoute', {
        db: db
    })
})


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
