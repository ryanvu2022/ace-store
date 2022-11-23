import React from 'react';
import Rating from './Rating';
import { useParams } from 'react-router-dom';
import { products } from '../products/products';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';
import icons from '../products/icons';

const ProductDetail = () => {
   const { productId } = useParams();
   const { cart } = useSelector(store => store.cart)
   const dispatch = useDispatch();

   const item = products.filter(item => item.id == productId)[0];
   const { id, name, price, image, inStock, ratings, fastDelivery, description, numberOfRatedPeople } = item;
   
   return (
      <div className="flex flex-col gap-4">
         <div className="flex flex-col sm:flex-row gap-x-12 mt-12 mx-12">
            <img src={image} alt={name} className="md:w-96 md:h-96 sm:w-72 sm:h-72"/>
            <div className="flex flex-col gap-4">
               <h1 className="md:text-5xl sm:text-3xl text-2xl mt-4">{name}</h1>
               <div className="flex flex-row md:text-xl sm:text-base">
                  <span className="mr-2 tracking-wide">Rating:</span> 
                  <Rating rating={ratings}/>
                  <span className="ml-1">({numberOfRatedPeople})</span>
                  
                  { fastDelivery
                     ? <span className="ml-10 tracking-wide">Fast Delivery</span>
                     : <span className="ml-10 tracking-wide">5 Days Delivery</span>
                  }
               </div>
               <h2 className="md:text-xl sm:text-lg text-base">Details:</h2>
               <p className="md:text-lg text-base">{description}</p>
               <h4 className="md:text-3xl sm:text-2xl text-3xl text-darkgreen font-medium mt-2">CAD ${price}</h4>
               <div className="flex gap-4">
                  {cart.some(p => p.id === id) && (
                     <button className="transition-all duration-300 ease-linear md:text-xl sm:text-lg tracking-wide bg-red-600 hover:bg-red-400 text-white md:py-3 sm:py-1 py-2 md:px-4 sm:px-2 px-4 my-2 rounded-md md:w-56 sm:w-48 mt-4" onClick={() => dispatch(removeFromCart(id))}>
                        Remove from Cart
                     </button>
                  )}
                  {!cart.some(p => p.id === id) && inStock && (
                     <button className="transition-all duration-300 ease-linear md:text-xl sm:text-lg tracking-wide bg-darkgreen hover:bg-hovergreen text-white border-2 border-darkgreen md:py-3 sm:py-1 py-2 md:px-4 sm:px-2 px-4 my-2 rounded-md md:w-44 sm:w-36 mt-4" onClick={() => dispatch(addToCart(item))}>
                        Add to Cart
                     </button>
                  )}
                  {!inStock && (
                     <button className="transition-all duration-300 ease-linear md:text-xl sm:text-lg tracking-wide bg-gray-600 hover:bg-gray-400 text-white md:py-3 sm:py-1 py-2 md:px-4 sm:px-2 px-4 my-2 rounded-md md:w-44 sm:w-36 mt-4" disabled>
                        Out of Stock
                     </button>
                  )}
                  {inStock && (
                     <Link to="/cart">
                        <button className="transition-all duration-300 ease-linear md:text-xl sm:text-lg tracking-wide hover:text-white hover:bg-hovergreen text-darkgreen border-2 border-darkgreen md:py-3 sm:py-1 py-2 md:px-4 sm:px-2 px-4 my-2 rounded-md md:w-44 sm:w-36 mt-4" onClick={() => { if (!cart.some(p => p.id === id)) dispatch(addToCart(item)); }}>
                           Buy Now
                        </button>  
                     </Link>             
                  )}       
               </div>          
            </div>
         </div>
         <div className="flex flex-wrap justify-evenly text-base items-stretch">
            <div className="flex flex-col gap-4 ss:my-4 my-2 items-center border-2 md:p-8 p-4 w-36 ss:w-56 lg:w-64">
               <img src={icons.shipping} className="sm:w-16 ss:w-10 w-12"/>
               <p className="text-center">Worldwide <br/> Shipping</p>
            </div>
            <div className="flex flex-col gap-4 ss:my-4 my-2 items-center border-2 md:p-8 p-4 w-36 ss:w-56 lg:w-64">
               <img src={icons.returns} className="sm:w-16 ss:w-10 w-12"/>
               <p className="text-center">Free 30-day <br/> Returns</p>
            </div>            
            <div className="flex flex-col gap-4 ss:my-4 my-2 items-center border-2 md:p-8 p-4 w-36 ss:w-56 lg:w-64">
               <img src={icons.warranty} className="sm:w-16 ss:w-10 w-12"/>
               <p className="text-center">12-month <br/> Warranty</p>
            </div>
            <div className="flex flex-col gap-4 ss:my-4 my-2 items-center border-2 md:p-8 p-4 w-36 ss:w-56 lg:w-64">
               <img src={icons.checkout} className="sm:w-16 ss:w-10 w-12"/>
               <p className="text-center">Secure <br/> Checkout</p>
            </div>                     
         </div>
      </div>
      
   )
}

export default ProductDetail;