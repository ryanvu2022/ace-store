import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
   name: "cart",
   initialState: {
      cart: [],
      total: 0,
      amount: 0,
   },
   reducers: {
      clearCart: (state) => {
         state.cart = []
      },
      addToCart: (state, { payload }) => {
         state.cart.push({ ...payload, quantity: 1 })
         state.amount += 1;
      },
      removeFromCart: (state, { payload }) => {
         state.cart = state.cart.filter(item => item.id !== payload);
         state.amount -= 1;
      },
      increase: (state, { payload }) => {
         const item = state.cart.find(item => item.id === payload);
         item.quantity += 1;
         state.amount += 1;
      },
      decrease: (state, { payload }) => {
         const item = state.cart.find(item => item.id === payload);
         if (item.quantity > 1) {
            item.quantity -= 1;
            state.amount -= 1;
         }
      },
      calculateTotal: (state) => {
         let total = 0;
         let amount = 0
         state.cart.forEach(item => {
            amount += item.quantity;
            total += item.quantity * item.price;
         })
         state.amount = amount
         state.total = total;
      }
      
   }
})

export const { clearCart, addToCart, removeFromCart, increase, decrease, calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;