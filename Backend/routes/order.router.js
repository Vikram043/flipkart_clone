const express = require('express');
const { orders, verify } = require('../controllers/payment.controller');


const paymentRouter = express.Router();

paymentRouter.post('/orders', orders);
paymentRouter.post('/verify', verify);

module.exports = {paymentRouter};
