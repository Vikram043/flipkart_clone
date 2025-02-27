const express=require('express')
const { signIn, logIn, resetPassword } = require('../controllers/auth.controller')
const { get } = require('../controllers/crud.controller')
const { userModal } = require('../model/user.model')
const userRouter=express.Router()

userRouter.post('/signIn',signIn)
userRouter.post('/login',logIn)
userRouter.post('/resetPassword/:id',resetPassword)
userRouter.get('/',get(userModal))

module.exports={userRouter}