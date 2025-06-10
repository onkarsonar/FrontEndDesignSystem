const express = require('express');
const app = express();

let data='Initial Data';

app.get('/',(req,res) => {
    res.sendFile(__dirname+'/index.html');
});

app.get('/getData',(req,res)=> {
    res.send({
        data
    });
});

//use Post or Put method for updte data, Get method is used for browser purpose
app.get('/updateData',(req,res)=>{
    data = 'Updated Data';
    res.send({
        data
    })
});

const port = process.env.PORT || 5011;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});