import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import modalReducer from "../features/modal/modalSlice";
import productReducer from "../features/product/productSlice";
import { productsApi } from "../features/api/apiSlice";

export default configureStore({
   reducer: {
      cart: cartReducer,
      modal: modalReducer,
      product: productReducer,
      [productsApi.reducerPath]: productsApi.reducer,      
   },
   middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(productsApi.middleware),
})