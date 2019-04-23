let express = require('express');
let path = require('path');

let app = express();

// app.use(express.static('static'));

// app.use(function(req,res,next){
//     res.sendFile(__dirname+'/index.html');
// })

app.use(express.static(path.join(__dirname, './build')));

app.listen(2280,()=>console.log('work..'));