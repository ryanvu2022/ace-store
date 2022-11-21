import React from "react";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { products } from "../products/products";
import { useSelector } from "react-redux";

const Home = () => {
   const { byRating, byFastDelivery, byStock, sort } = useSelector(store => store.product)

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
         sortedProducts = sortedProducts.filter(item => item.ratings == byRating)
      
      return sortedProducts;
   }

   return (
      <div className="flex flex-col sm:flex-row bg-white">
         <div className="flex sm:w-56 w-full">
            <Filter />               
         </div> 
         <div className="flex flex-col">
            <div className="flex flex-wrap justify-around">
               {filterProducts().map(item => (
                  <SingleProduct 
                     key={item.id}
                     item={item}
                  />
               ))}
            </div>
            <div className="flex flex-col justify-center items-center mt-4 mb-2 text-lg tracking-wider">
               <p className=" flex flex-row">Ryan Vu 
                  <span className="relative top-1.5 mx-1"><AiOutlineCopyrightCircle /></span> 
                  {new Date().getFullYear()} </p>
               <div>
                  Pictures from <a href="https://www.uniqlo.com/ca/en/men/tops/ut-graphic-tees">UNIQLO</a>
                  <img className="w-5 relative bottom-0.5 inline ml-1" src="https://tinyurl.com/uniqloz" />                                    
               </div>
            </div>  
         </div>          
         
           
      </div>
   )
}

export default Home;