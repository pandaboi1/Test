const express = require('express')
const path = require('path')

const PORT = 8080

const app = express()
const static_dir = path.join(__dirname, 'static')
app.use(express.static(static_dir))
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs')

const db = [
    {id: 0, 
    name: 'best friend', 
    price: 12.34, 
    description: "Occasionally rabid, but always there for you.", 
    img_url: "https://www.galvestontx.gov/ImageRepository/Document?documentID=12166",
    reviews: [
        {author: 'Amy', text: "Awwwwe!"},
        {author: 'Sam', text: "Cute"},
        {author: 'Dog', text: "Woof Woof"}
        
    ]},
        
    {id: 1, 
    name: 'chair', 
    price: 56.78, 
    description: "A big, comfy chair. Great for sitting, also laying down if you are very small.", 
    img_url: "https://www.thegardnernews.com/gcdn/authoring/2019/07/06/NGAR/ghows-WT-8c62a76c-d910-3b14-e053-0100007f5d07-bf4717a9.jpeg",
    review: [
        {author: 'Ed', text: "Woahhh!"},
        {author: 'John', text: "Cool"},
        {author: 'Cat', text: "Meow"}
        
    ]},

    {id: 2, 
    name: 'cool bridge', 
    price: 20000.00, 
    description: "Slightly used, in great condition. Price does not include shipping.", 
    img_url: "https://assets.editorial.aetnd.com/uploads/2015/02/topic-golden-gate-bridge-gettyimages-177770941.jpg",
    reviews: [
        {author: 'Todd', text: "Friend!"},
        {author: 'Mary', text: "Haha Todd"},
        {author: 'Fish', text: "Blub"}
        
    ]}
     
]

app.get('/time', (req,res) =>{
    const currentTime = new Date().toLocaleTimeString();
    res.render('time', {time: currentTime});
});

app.get('/items', (req, res) => {
    res.render('items', {
        items: db
    })
})

app.get('/item_view/:id', (req,res) => {    
    console.log("They asked for item " + req.params.id)
    const id = parseInt(req.params.id)

    // retirve item from db and update
    let items = null
    for (let elt in db){
        if (elt.id == id){
            items = elt
            break
        }
    }
	res.render('item_view', {        
        items: db,
		error:false
	});
});

app.post('/item_view_response/:id', (req, res) => {
	console.log(req.params.id)
	console.log(req.body.name)
    // check the item id
    const id = parseInt(req.params.id)
    

    // check the review
    // retirve item from db and update
    let items = null
    for (let elt in db){
        if (elt.id == id){
            items = elt
            break
        }
    }

    res.render('item_view', {
        items: db,
        error: "Bad Input"
    })
})

app.listen(PORT, () => console.log(`Server is ready on port ${PORT}`))