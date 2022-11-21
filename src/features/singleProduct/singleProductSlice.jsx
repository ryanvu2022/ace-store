import { createSlice } from "@reduxjs/toolkit";

export const singleProductSlice = createSlice({
   name: "singleProduct",
   initialState: {},
   reducer: {
      selectedProduct: (state, action) => {
         state = action.payload
      }
   }
});

export const { selectedProduct } = singleProductSlice.actions;

export default singleProductSlice.reducer;