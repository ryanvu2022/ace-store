import React, { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";
import axios from "axios";
import icons from "../products/icons";

const Home = () => {
   const { byRating, byFastDelivery, byStock, sort } = useSelector(store => store.product)

   const [productsPerPage] = useState(8);
   const [currentPage, setCurrentPage] = useState(1);
   const [loading, setLoading] = useState(false);
   const [products, setProducts] = useState([]);

   useEffect(() => {
      const getProducts = async () => {
         setLoading(true);
         const response = await axios.get("https://ace-store-api.onrender.com/products");
         setProducts(response.data);
         setLoading(false);
      }

      getProducts();
   }, []);

   const filterProducts = () => {
      let sortedProducts = products;
      if (sort)
         sortedProducts = sortedProducts.sort((a,b) => (
            sort === "lowToHigh" ? a.price - b.price : b.price - a.price
         ));
      
      if (byFastDelivery)
         sortedProducts = sortedProducts.filter(item => item.fastDelivery)
      
      if (byStock)
         sortedProducts = sortedProducts.filter(item => item.inStock)
      
      if (byRating)
         sortedProducts = sortedProducts.filter(item => item.ratings >= byRating)
      
      return sortedProducts;
   }

   const indexOfLastProduct = currentPage * productsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
   const currentProducts = filterProducts().slice(indexOfFirstProduct, indexOfLastProduct);

   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   if (loading) {
      return <div className="flex justify-center mt-4">
               <img src={icons.spinner} className="w-16" />
               <img src={icons.spinner} className="w-16" />
               <img src={icons.spinner} className="w-16" />
            </div>

   }

   return (
      <div className="flex flex-col sm:flex-row bg-white">
         <div className="flex sm:w-56 w-full">
            <Filter />               
         </div> 
         <div className="flex flex-col">
            <div className="flex flex-wrap justify-evenly border-l-2">
               {currentProducts.map(item => (
                  <SingleProduct 
                     key={item._id}
                     item={item}
                  />
               ))}
            </div>
            <Pagination 
               productsPerPage={productsPerPage} 
               totalProducts={filterProducts().length} 
               paginate={paginate}            
            />            
         </div>              
      </div>
   )
}

export default Home;