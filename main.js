const express = require("express");
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/watcher', (req, res) => {
    res.sendDate({a:9});
})

// app.post('/watcher', (req, res) => {
    
// })

app.listen(3000, () => {
    console.log("[LISTENING]")
})

