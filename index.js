const express = require("express");
const req = require("express/lib/request");
const data=require("./routes/data")
const app = express()
const port = 3000
const db= require("./dbConecttion.js")

// GET method route
app.get('/',(req,res)=>{
    // res.writeHead(200,{"Content-Type":"application/json"});
    res.send("connected");
})
app.post('/',(req,res)=>{
    
})
app.get('/api',(req,res)=>{
    res.send(JSON.stringify(data))
})
app.get('/db',(req,res)=>{
    db.connect()
    db.query('USE cadastro; SELECT * FROM pessoas;',(error,result,field)=>{
        if(error) throw error;
        res.send(result)
    })
})

app.listen(port,()=>{
    console.log(`starting server in the port ${port}`)
})

