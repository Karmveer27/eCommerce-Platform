export function addDecimals(num){
    return (Math.round(num*100)/100).toFixed(2);
}

 export const updateCart = (state) => {
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