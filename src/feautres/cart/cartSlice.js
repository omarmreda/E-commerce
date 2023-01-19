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
    },
    clearItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});
export const { addToCart, clear, decrement, calculateTotal, clearItem } =
  cartSlice.actions;

export default cartSlice.reducer;
