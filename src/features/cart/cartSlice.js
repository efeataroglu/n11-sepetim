import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data";

const initialState = {
  data: data,
  amount: 1,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.data = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.data = state.data.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const data = state.data.find((item) => item.id === payload.id);
      data.amount = data.amount + 1;
    },
    decrease: (state, { payload }) => {
      const data = state.data.find((item) => item.id === payload.id);
      data.amount = data.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.data.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
