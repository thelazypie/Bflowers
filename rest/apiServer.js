const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')

let REST = express();
REST.use(bodyParser.urlencoded({ extended: true }));
REST.use(bodyParser.json());
REST.use(express.static('./apiServerData/staticData'));


REST.post('/getAccessories', (req,res)=>{
    const data = JSON.parse(fs.readFileSync('./apiServerData/accessories.json'));
    res.send({data:data});
});

REST.post('/getProducts', (req,res)=>{
    const data = JSON.parse(fs.readFileSync('./apiServerData/products.json'));
    res.send({data:data});
});

REST.post('/reg', (req,res)=>{
    const data = JSON.parse(fs.readFileSync('./apiServerData/users.json','utf8'));
    if(!data.users) {data.users = []};
    // console.log(req.query)
    for (let i = 0; i < data.users.length; i++) {
        const element = data.users[i];
        if(req.body.access != 'user') {
            res.send({code:'3',message:"forbidden access"});
            return;
        }
        if(element.name === req.body.name) {
            res.send({code:'1',message:"user already exist"})
            return;
        }
        if(element.email === req.body.email) {
            res.send({code:'2',message:"email used"})
            return;
        } 
    }
    data.users.push({
        name:req.body.name,
        email:req.body.email,
        access: req.body.access,
        password: req.body.password
    });
    fs.writeFileSync('./apiServerData/users.json',JSON.stringify(data));
    res.send({code:'0',message:"successfully registered"});

});

REST.post('/setQuestion',(req,res)=>{
    // console.log(req.query);
    const data = JSON.parse(fs.readFileSync('./apiServerData/questions.json','utf8'));
    if(!data.questions) {data.questions = []};
    data.questions.push({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    fs.writeFileSync('./apiServerData/questions.json',JSON.stringify(data));
    res.send({code:'0',message:"successfully added"});
})

REST.put('/me/add',(req,res)=>{
    // console.log(req.body);
    const data = JSON.parse(fs.readFileSync('./apiServerData/users.json','utf8'));
    if(!data.users) {data.users = []};
    for (let i = 0; i < data.users.length; i++) {
        const element = data.users[i];
        if(element.name === req.body.user) {
            if(!element.trash) element.trash = [];
            element.trash.push({
                title: req.body.title,
                description: req.body.description,
                link: req.body.link
            });
            fs.writeFileSync('./apiServerData/users.json',JSON.stringify(data));
            res.send({code:'0',message:"successfully putted",trash:element.trash});
            return;
        }
    }
    
})

REST.post('/login',(req,res)=>{
    const data = JSON.parse(fs.readFileSync('./apiServerData/users.json','utf8'));
    for (let i = 0; i < data.users.length; i++) {
        const element = data.users[i];
        if(req.body.name === element.name && req.body.password === element.password) {
           res.send({code:"0",message:{user:element.name,email: element.email, trash: element.trash}});
        }
    } 
})

REST.listen(1337,()=>console.log('work..'));