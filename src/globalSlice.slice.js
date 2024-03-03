import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "globalSlice",
  initialState: {
    categorySelected: "",
    shortlistedProducts: [],
    cart: [],
  },
  reducers: {
    setCategorySelectedAction: (state, payload) => {
      state.categorySelected = payload.action;
    },
    setAddShortlistProductsAction: (state, { payload }) => {
      state.shortlistedProducts = [
        ...state.shortlistedProducts,
        payload,
      ];
    },
    setRemoveShortlistProductsAction: (state, { payload }) => {
      state.shortlistedProducts = payload
    },
    setCartAction: (state, { payload }) => {
      state.cart = payload
    }
  },
});

export const {
  setCategorySelectedAction,
  setAddShortlistProductsAction,
  setRemoveShortlistProductsAction,
  setCartAction
} = globalSlice.actions;
export default globalSlice.reducer;
