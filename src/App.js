import "./App.css";
import Data from "./sandwichData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import Data2 from "./juicesData";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotal } from "./feautres/cart/cartSlice";
function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/not-found" element={<NotFound />} />

          <Route
            path="/"
            exact
            element={<HomePage sandwichData={Data} juicesData={Data2} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
