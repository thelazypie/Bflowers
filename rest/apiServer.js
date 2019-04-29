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

REST.get('/reg', (req,res)=>{
    const data = JSON.parse(fs.readFileSync('./apiServerData/users.json','utf8'));
    if(!data.users) {data.users = []};
    // console.log(req.query)
    for (let i = 0; i < data.users.length; i++) {
        const element = data.users[i];
        if(req.query.access != 'user') {
            res.send({code:'3',message:"forbidden access"});
            return;
        }
        if(element.name === req.query.name) {
            res.send({code:'1',message:"user already exist"})
            return;
        }
        if(element.email === req.query.email) {
            res.send({code:'2',message:"email used"})
            return;
        } 
    }
    data.users.push({
        name:req.query.name,
        email:req.query.email,
        access: req.query.access,
        password: req.query.password
    });
    fs.writeFileSync('./apiServerData/users.json',JSON.stringify(data));
    res.send({code:'0',message:"successfully registered"});

});

REST.get('/setQuestion',(req,res)=>{
    // console.log(req.query);
    const data = JSON.parse(fs.readFileSync('./apiServerData/questions.json','utf8'));
    if(!data.questions) {data.questions = []};
    data.questions.push({
        name: req.query.name,
        email: req.query.message,
        message: req.query.message
    });
    fs.writeFileSync('./apiServerData/questions.json',JSON.stringify(data));
    res.send('successfully added');
})

REST.use(express.static('./apiServerData/staticData'));
REST.use(bodyParser.urlencoded({ extended: true }));

REST.listen(1337,()=>console.log('work..'));