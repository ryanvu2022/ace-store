import React, { useState } from "react";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";

const Home = ({ data }) => {
   const { byRating, byFastDelivery, byStock, sort } = useSelector(store => store.product)

   const [productsPerPage] = useState(12);
   const [currentPage, setCurrentPage] = useState(1);

   const filterProducts = () => {
      let sortedProducts = data;
      if (sort) {         
         sortedProducts = sortedProducts.slice().sort((a,b) => (
            sort === "lowToHigh" ? a.price - b.price : b.price - a.price
         ));
      }
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
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   return (
      <div className="flex flex-col sm:flex-row bg-white items-start relative">
         <div className="flex sm:w-56 w-full sticky top-24">
            <Filter />               
         </div> 
         <div className="flex flex-col">
            <div className="flex flex-wrap justify-evenly border-l-2">
               {filterProducts().slice(indexOfFirstProduct, indexOfLastProduct).map(item => (
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