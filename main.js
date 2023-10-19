const express = require("express");
var bodyParser = require('body-parser')
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
a = []; a.push({p: false, st: true, s: 0 })

async function sleep(time){
    return new Promise((resolve) => { setTimeout(resolve, time)})
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
    console.log("get/")
})

app.get('/data', (req, res) => {
    res.json(a[0]);
})

app.post('/data', (req, res) => {
        a[0].p = req.body.p
        sleep(1500);   
})

app.listen(3000, () => {
    console.log("...")
})

setInterval( function(){console.log(a[0].p)}, 1000);