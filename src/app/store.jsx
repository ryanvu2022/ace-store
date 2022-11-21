import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import modalReducer from "../features/modal/modalSlice";
import productReducer from "../features/product/productSlice";
import singleProductReducer from "../features/singleProduct/singleProductSlice";

export default configureStore({
   reducer: {
      cart: cartReducer,
      modal: modalReducer,
      product: productReducer,
      singleProduct: singleProductReducer
   }
})