
import { createSlice } from "@reduxjs/toolkit";
import { addDecimals } from "../utils/cartUtils.js";
import { updateCart } from '../utils/cartUtils.js'



const intialState = localStorage.getItem("cart") 
    ? JSON.parse(localStorage.getItem("cart"))
    : { cartItems: [] };

const cartSlice = createSlice({
    name: 'cart',
    initialState: intialState,
    reducers: {
        addToCart: (state,action) => {
            // Get item from payload -> check if existing -> if so add +1 to quantity else add to cart -> update prices
            const item = action.payload;
            const existItem = state.cartItems.find((tempItem) => (tempItem._id === item._id));

            if(existItem){
                 state.cartItems = state.cartItems.map((tempItem) => 
                    tempItem._id === existItem._id ? item : tempItem
                 );
            }else{
                state.cartItems = [...state.cartItems, item];
            }

            return updateCart(state);

            
            
        
        }
    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer // Add this to store js
