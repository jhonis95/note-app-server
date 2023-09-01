const express = require("express");
const data=require("./data.js")
const app = express()
const port = 3000

// GET method route
app.get('/',(req,res)=>{
    // res.writeHead(200,{"Content-Type":"application/json"});
    res.send(JSON.stringify(data));
})

app.post('/')

app.listen(port,()=>{
    console.log(`starting server in the port ${port}`)
})

