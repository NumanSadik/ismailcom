const express = require('express');
const fs = require('fs')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html")
})
app.listen(2000, ()=> console.log("app is runnin"))