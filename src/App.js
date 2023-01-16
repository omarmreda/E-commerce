import "./App.css";
import Data from "./sandwichData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import Data2 from "./juicesData";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
function App() {
  return (
    <div>
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}

export default App;
