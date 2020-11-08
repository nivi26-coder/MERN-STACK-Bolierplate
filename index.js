const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/test',
                {useNewUrlParser:true},{uuseUnifiedTopology: true}).then(() => console.log("DB Connected")).catch(err => console.log(err));

app.get('/',(req,res) => {
    res.send('Hello Nithish');
})





app.listen(3000,(req,res) => {
    console.log("Server has started!!!!");
})