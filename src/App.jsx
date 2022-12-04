import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import PageNotFound from "./components/PageNotFound";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import { useGetProductsQuery } from "./features/api/apiSlice";
import icons from "./products/icons";

function App() {
  const { data, error, isLoading, isError } = useGetProductsQuery();

  if (isLoading) return <img src={icons.spinner} className="w-16 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />         
  else if (isError) return <div>{error.toString()}</div>
  
  return (
    <div>
      <Navbar />  
        <Routes>
          <Route path="/" exact element={<Home data={data}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes> 
      <Footer />
    </div>
  )
}

export default App;
