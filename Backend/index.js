const express=require('express')
const { connection } = require('./config/db.connection')
const { productRouter } = require('./routes/product.route')
require('dotenv').config()


const app=express()
app.use(express.json())
const PORT=process.env.PORT || 8080


app.get('/',async(req,res)=>{
    res.status(201).send(`Working Fine`)
})

app.use('/api',productRouter)



app.listen(PORT,async()=>{
    try{
        await connection()
        console.log(`server running on port ${PORT}`)
        console.log(`Connected to DB`)
    }catch(err){
        console.log(`Error in Connecting ${err}`)
    }
   
})