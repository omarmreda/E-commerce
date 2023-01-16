import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feautres/cart/cartSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
