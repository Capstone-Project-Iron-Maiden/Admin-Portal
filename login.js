const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const app = express();

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

app.get('/login',(req,res) =>{
    res.sendFile(path.join(__dirname,'/public','login.html'))
})

app.get('/dashboard',(req,res) =>{
    res.sendFile(path.join(__dirname,'/public','dashboard.html'))
})
app.get('/speakers',(req,res) =>{
    res.sendFile(path.join(__dirname,'/public','speakers.html'))
})
app.get('/eventRegister',(req,res) =>{
    res.sendFile(path.join(__dirname,'/public','eventRegister.html'))
})


const PORT = 8080;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));