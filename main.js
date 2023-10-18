const express = require("express");
var bodyParser = require('body-parser')
const fs = require("fs");
const { stringify } = require("querystring");
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
var a = [];
app.post('/data', (req, res) => {
    a.pop()
    a.push(req.body)
})

function aa() {console.log(a[0])}

setInterval(aa, 1000)

app.listen(3000, () => {
    console.log("...")
})

