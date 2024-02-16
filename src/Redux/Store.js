import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Slices/ProductSlice";
import { cartReducer } from "./Slices/CartSlice";
export const store = configureStore({reducer:{productReducer, cartReducer}})
