const express = require("express");
const req = require("express/lib/request");
const data=require("./data.js")
const app = express()
const port = 3000
const db= require("./dbConecttion.js")

// GET method route
app.get('/',(req,res)=>{
    // res.writeHead(200,{"Content-Type":"application/json"});
    res.send("connected");
})
app.get('/api',(req,res)=>{
    res.send(JSON.stringify(data))
})
app.get('/db',(req,res)=>{
    db.connect()
    db.query('USE cadastro',(error,result,field)=>{
        if(error) throw error;
        res.send("okay")
        console.log(result)
        db.release()
    })
    // db.query('SHOW ', (err, rows, fields) => {
    //     if (err) throw err
      
    //     console.log('The solution is: ', rows[0].solution)
    //   })
      
    //   db.end()
})

app.listen(port,()=>{
    console.log(`starting server in the port ${port}`)
})

