
const express = require('express')
const db = require("../dbConecttion.js");


const router = express.Router()

router.get('/login',(req,res)=>{
    db.connect()
    db.query('USE cadastro; SELECT * FROM pessoas;',(error,result,field)=>{
        if(error) throw error;
        res.send(result)
    })
})