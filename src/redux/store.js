import { configureStore } from '@reduxjs/toolkit';


import { cartReducer } from './reducers/cartReducers';
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducers';

const cartFromLocalStorage = localStorage.getItem("cart") 
? JSON.parse(localStorage.getItem("cart")) 
: [];

const INITIAL_STATE = {
    cart: {
        cartItems: cartFromLocalStorage
    },
};

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        getProducts: getProductsReducer,
        getProductDetails: getProductDetailsReducer,
    },
    preloadedState: INITIAL_STATE,
});
