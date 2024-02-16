import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[

    ]
}

const cartSlice =  createSlice({
    name:'cart',
    initialState,
    reducers:{
        add:(state,action) => {
            // console.log(action.payload, "ABHINAV")
            let isPresent = false
            state.cart.forEach(element => {
                if (element.product.id == action.payload.id) {
                    element.quantity += 1
                    isPresent=true
                } 
            });
            if(!isPresent) {
                state.cart.push({product:action.payload, quantity:1}) 
            }
            
            
        },
        remove:(state,action) => {
            // console.log(action.payload, "ABHINAV")
            state.cart.forEach((element, index) => {
                if (element.product.id == action.payload) {
                    if(element.quantity == 1){
                    state.cart.splice(index, 1)
                } else {
                    element.quantity -= 1
                }
                } 
            });
            
        },
        
        
    }
})


    export const cartReducer = cartSlice.reducer;
    export const cartActions = cartSlice.actions;
    export const cartSelector = (state) => state.cartReducer.cart;
