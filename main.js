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

app.post('/data', (req, res) => {
    console.log(req.body);
})

app.listen(3000, () => {
    console.log("...")
})

