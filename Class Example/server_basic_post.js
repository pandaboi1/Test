const express = require('express');
const path = require('path');

const PORT = 8080;

app = express();
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.get('/form', (req,res) => {
	res.render('form', {
		error:false
	});
});
//Is name blank?? Respond accordingly 
app.post('/response/:var1', (req, res) =>{
	console.log(req.params.var1)
	console.log(req.body.name)
	res.render('form', {
		error: "Bad input"
	})
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
