import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import PageNotFound from "./components/PageNotFound";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      <Navbar />  
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes> 
      <Footer />
    </div>
  )
}

export default App;
