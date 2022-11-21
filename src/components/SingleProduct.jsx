import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rating from './Rating';
import { addToCart, removeFromCart } from '../features/cart/cartSlice';

const SingleProduct = ({ item }) => {
   const { id, name, price, image, inStock, ratings, fastDelivery } = item;

   const { cart } = useSelector(store => store.cart)

   const dispatch = useDispatch();

   return (
      <div className="shadow-2xl sm:w-64 ss:w-72 w-88 m-2.5 p-4 rounded-md bg-white cursor-pointer">
         <img src={image} alt={name}/>
         <div>
            <h1 className="font-medium sm:text-base text-lg mt-1">{name}</h1>
            <h5 className="tracking-wide font-medium text-lg">${price}</h5>
            { fastDelivery
               ? <div className="text-lg sm:text-base">Fast Delivery</div>
               : <div className="text-lg sm:text-base">5 Days Delivery</div>
            }
            <div className="flex flex-row">
               <Rating rating={ratings}/>
            </div> 
         </div>

         <div>
            {cart.some(p => p.id === id) && (
               <button className="transition-all duration-300 ease-linear text-lg sm:text-base bg-red-600 hover:bg-red-400 text-white py-2 px-4 mr-2 my-2 rounded-md" onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove from Cart
               </button>
            )}
            {!cart.some(p => p.id === id) && inStock && (
               <button className="transition-all duration-300 ease-linear text-lg sm:text-base bg-blue-600 hover:bg-blue-400 text-white py-2 px-4 mr-2 my-2 rounded-md" onClick={() => dispatch(addToCart(item))}>
                  Add to Cart
               </button>
            )}
            {!inStock && (
               <button className="transition-all duration-300 ease-linear text-lg sm:text-base bg-gray-600 hover:bg-gray-400 text-white py-2 px-4 mr-2 my-2 rounded-md" disabled>
                  Out of Stock
               </button>
            )}
        
         </div>
      </div>
   )
}

export default SingleProduct