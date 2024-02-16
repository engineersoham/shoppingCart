import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[
        
    ]
}

const productSlice =  createSlice({
    name:'products',
    initialState,
    reducers:{
        productList:(state,action) => {
            // console.log(action.payload, "ABHINAV")
            state.products = [...action.payload]
            
        },
        
    }
})


    export const productReducer = productSlice.reducer;
    export const productActions = productSlice.actions;
    export const productSelector = (state) => state.productReducer.products;
