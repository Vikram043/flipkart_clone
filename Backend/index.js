const express=require('express')
const { connection } = require('./config/db.connection')
require('dotenv').config()


const app=express()
const PORT=process.env.PORT || 8080


app.listen(PORT,async()=>{
    try{
        await connection
        console.log(`server running on port ${PORT}`)
        console.log(`Connected to DB`)
    }catch(err){
        console.log(`Error in Connecting ${err}`)
    }
   
})