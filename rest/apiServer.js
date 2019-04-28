const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')

let REST = express();


REST.get('/getAccessories', (req,res)=>{
    const data = JSON.parse(fs.readFileSync('./apiServerData/accessories.json'));
    res.send({data:data});
});

REST.get('/getProducts', (req,res)=>{
    const data = JSON.parse(fs.readFileSync('./apiServerData/products.json'));
    res.send({data:data});
});

REST.post('/setNotify', (req,res)=>{
    // const data = JSON.parse(fs.readFileSync('./apiServerData/products.json'));
    // res.send({data:data});
});

REST.get('/setQuestion',(req,res)=>{
    // console.log(req.query);
    const data = JSON.parse(fs.readFileSync('./apiServerData/questions.json','utf8'));
    if(!data.questions) {data.questions = []};
    data.questions.push(req.query);
    fs.writeFileSync('./apiServerData/questions.json',JSON.stringify(data));
    res.send('successfully added');
})

REST.use(express.static('./apiServerData/staticData'));
REST.use(bodyParser.urlencoded({ extended: true }));

REST.listen(1337,()=>console.log('work..'));