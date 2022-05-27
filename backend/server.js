const http = require('http');
const cors = require('cors');
const express = require('express');
const app=express();


app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000")
  });
  
app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.post('/',(req,res)=>{
            res.json("Hello World");
            })