import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import PageNotFound from "./components/PageNotFound"

function App() {

  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
