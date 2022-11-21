import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
   name: "product",
   initialState: {
      byRating: 0,
      byFastDelivery: false,
      byStock: false,
      sort: ""
   },
   reducers: {
      sortByPrice: (state, { payload }) => {
         state.sort = payload;
      },
      filterByStock: (state) => {
         state.byStock = !state.byStock;
      },
      filterByDelivery: (state) => {
         state.byFastDelivery = !state.byFastDelivery;
      },
      filterByRating: (state, { payload }) => {
         state.byRating = payload;
      },
      clearFilters: (state) => {
         state.byRating = 0;
         state.byFastDelivery = false;
         state.byStock = false;
      }
   }
})

export const { sortByPrice, filterByStock, filterByDelivery, filterByRating, clearFilters } = productSlice.actions;

export default productSlice.reducer;