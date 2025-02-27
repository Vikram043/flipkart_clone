const express=require('express')
const cookies=require('cookie-parser')
const { connection } = require('./config/db.connection')
const { productRouter } = require('./routes/product.route')
const { userRouter } = require('./routes/user.route')
require('dotenv').config()


const app=express()
app.use(express.json())
app.use(cookies())
const PORT=process.env.PORT || 8080


app.get('/',async(req,res)=>{
    res.status(201).send(`Working Fine`)
})

app.use('/api',productRouter)
app.use('/api',userRouter)



app.listen(PORT,async()=>{
    try{
        await connection()
        console.log(`server running on port ${PORT}`)
        console.log(`Connected to DB`)
    }catch(err){
        console.log(`Error in Connecting ${err}`)
    }
   
})