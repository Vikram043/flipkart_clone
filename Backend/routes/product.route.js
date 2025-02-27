const express = require('express');
const { get, post, patch, deleteo, getOne } = require('../controllers/crud.controller');
const { ProductModel } = require('../model/product.model');

const productRouter = express.Router();

productRouter.get('/product', get(ProductModel));
productRouter.post('/product', post(ProductModel));
productRouter.patch('/product/:id', patch(ProductModel));
productRouter.delete('/product/:id', deleteo(ProductModel));
productRouter.get('/product/:id', getOne(ProductModel));

module.exports = { productRouter };
