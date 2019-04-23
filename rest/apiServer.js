let express = require('express');
const fs = require('fs');

let REST = express();


REST.get('/getAccessories', (req,res)=>{
    const data = JSON.parse(fs.readFileSync('./apiServerData/accessories.json'));
    res.send({data:data});
});

REST.use(express.static('./apiServerData/staticData'));

REST.listen(1337,()=>console.log('work..'));