const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geoLocation = require('../src/utility/geoCode');
const foreCast = require('../src/utility/foreCast'); 
const app = express()
const port = process.env.PORT || 3000;
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')


// Setup static directory to serve

app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Wheather',
        name:'John ken'
    })
})

app.get('/aboutme',(req,res)=>{
    res.render('about',{
        title:'Wheather',
        name:'John ken'
    });
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Wheather',
        name:'John ken',
        helpText:'for more detail contact us +78922005555'
    })
})

app.get('/product',(req,res)=>{
    //http://localhost:3000/product?name='john'
    if(!req.query.name){
       res.send('You must provide an address!')
    }else{
       res.send(req.query.name);
   }
})


app.get('/weather',(req,res)=>{
  

    geoLocation(req.query.address,({placeName,latitude,longitute})=>{
       // res.send(`current place ${placeName}`);
        
        foreCast(latitude,longitute,(response)=>{
            res.send({
                forecast: response,
                placeName,
                address: req.query.address
            })
        });
    });
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'Wheather'
    })
})
app.listen(port, () => {
    console.log('Server is up on port'+port)
})
