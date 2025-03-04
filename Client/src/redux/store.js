import { configureStore } from "@reduxjs/toolkit";
import {thunk} from 'redux-thunk';

import { cartReducer } from './reducers/cartReducer';
import {  getProductReducer,getProductDetailsReducer } from './reducers/productReducer';


const store = configureStore({
    reducer: {
        cart: cartReducer,
        getProducts: getProductReducer,
        getProductDetails: getProductDetailsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: true,
});

export default store;
