
import { createSlice } from "@reduxjs/toolkit";

function addDecimals(num){
    return (Math.round(num*100)/100).toFixed(2);
}



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

            //Item Price:
            let tempItemsPrice = 0;
           
            state.cartItems.forEach((i) => {
                
                
                tempItemsPrice += i.price * i.quantity
            })
            state.itemsAndTaxPrice = addDecimals(tempItemsPrice)
            //console.log(tempItemsPrice)
            state.itemsPrice = addDecimals(
                Number((0.85 * state.itemsAndTaxPrice))
            )
            //Item price without tax
            //Tax Price
            state.taxTotalPrice = addDecimals(
                Number((0.15 * state.itemsAndTaxPrice).toFixed(2))
            )
            
            
            //Shipping Price
            state.shippingPrice = addDecimals(
                Number(state.itemsPrice) > 100 ? 0 : 10
            )

            //Total Price
            state.totalprice = (
                Number(state.itemsAndTaxPrice) + Number(state.shippingPrice)
            ).toFixed(2);

            // Save the cart to localStorage
            localStorage.setItem('cart',JSON.stringify(state));
            
        
        }
    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer // Add this to store js
