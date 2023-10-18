const express = require("express");
var bodyParser = require('body-parser')
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

a = []; a.push({ pp: false, p: false, st: true, s: 0 })


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
    console.log("get/")
})

app.get('/data', (req, res) => {
    console.log("get/data");
      res.json(a[0]);
})

app.post('/data', (req, res) => {
        console.log("get/data")
        a.pop()
        a.push(req.body)
})

setInterval( function(){ console.log(a[0])}, 4000);

app.listen(3000, () => {
    console.log("...")
})
