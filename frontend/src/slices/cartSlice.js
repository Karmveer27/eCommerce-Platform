
import { createSlice } from "@reduxjs/toolkit";

function addDecimals(num){
    return (Math.round(num*100)/100).toFixed(2);
}

//const intialState =  [];
//const intialState = localStorage.getItem("cart" ? JSON.parse(localStorage.getItem("cart")) : {cartItems: []}   );

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
            console.log(item);
            const existItem = state.cartItems.find((tempItem) => (tempItem._id === item._id));

            if(existItem){
                 state.cartItems = state.cartItems.map((tempItem) => 
                    tempItem._id === existItem._id ? item : tempItem
                 );
            }else{
                state.cartItems = {...state, item};
            }

            //Item Price:
            let tempItemsPrice = 0;
            state.cartItems.forEach((item) => (
                tempItemsPrice += item.price * item.qty
            ))
            state.itemsPrice = addDecimals(tempItemsPrice)

            //Tax Price
            state.taxPrice = addDecimals(
                Number((0.15 * state.itemsPrice).toFixed(2))
            )

            //Shipping Price
            state.shippingPrice = addDecimals(
                state.itemsPrice + state.taxPrice > 100 ? 0 : 10
            )

            //Total Price
            state.totalprice = (
                Number(state.itemsPrice) + Number(state.taxPrice) + Number(state.shippingPrice)
            ).toFixed(2);

            // Save the cart to localStorage
            localStorage.setItem('cart',JSON.stringify(state));
            
        
        }
    }
});


export default cartSlice.reducer // Add this to store js
