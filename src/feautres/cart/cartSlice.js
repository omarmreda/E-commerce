import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      console.log(itemInCart);
      if (itemInCart) {
        itemInCart.quantity++;
        state.amount++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.amount++;
      }
    },
    increment: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      item.quantity++;
      state.amount = state.amount + 1;
    },
    clear: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
    decrement: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
        state.amount = state.amount - 1;
      }
    },
    calculateTotal: (state) => {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.quantity * item.price;
      });
      state.total = total;
      console.log(`total ${state.total}`);
    },
  },
});
export const { addToCart, increment, clear, decrement, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
