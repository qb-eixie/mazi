const express = require("express");
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/json', (req, res) => {
    res.sendFile(__dirname + "/data.json");
})

// app.post('/watcher', (req, res) => {
    
// })

app.listen(3000, () => {
    console.log("[LISTENING]")
})

