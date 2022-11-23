import React from 'react';
import Rating from './Rating';
import { useParams } from 'react-router-dom';
import { products } from '../products/products';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
   const { productId } = useParams();
   const { cart } = useSelector(store => store.cart)
   const dispatch = useDispatch();

   const item = products.filter(item => item.id == productId)[0];
   const { id, name, price, image, inStock, ratings, fastDelivery, description, numberOfRatedPeople } = item;
   
   return (
      <div className="grid grid-cols-detail gap-x-12 mt-12 mx-12">
         <img src={image} alt={name} className="w-96 h-96"/>
         <div className="flex flex-col gap-4">
            <h1 className="text-5xl uppercase">{name}</h1>
            <div className="flex flex-row text-xl">
               <span className="mr-2 tracking-wide">Rating:</span> 
               <Rating rating={ratings}/>
               <span className="ml-1">({numberOfRatedPeople})</span>
               
               { fastDelivery
                  ? <span className="ml-20 tracking-wide">Delivery: Fast Delivery</span>
                  : <span className="ml-20 tracking-wide">Delivery: 5 Days Delivery</span>
               }
            </div>
            <h2 className="text-xl">Details:</h2>
            <p className="text-lg">{description}</p>
            <h4 className="text-3xl text-darkgreen font-medium mt-2">CAD ${price}</h4>
            <div className="flex gap-8">
               {cart.some(p => p.id === id) && (
                  <button className="transition-all duration-300 ease-linear text-xl tracking-wide bg-red-600 hover:bg-red-400 text-white py-3 px-4 mr-2 my-2 rounded-md w-56 mt-4" onClick={() => dispatch(removeFromCart(id))}>
                     Remove from Cart
                  </button>
               )}
               {!cart.some(p => p.id === id) && inStock && (
                  <button className="transition-all duration-300 ease-linear text-xl tracking-wide bg-darkgreen hover:bg-hovergreen text-white border-2 border-darkgreen py-3 px-4 mr-2 my-2 rounded-md w-44 mt-4" onClick={() => dispatch(addToCart(item))}>
                     Add to Cart
                  </button>
               )}
               {!inStock && (
                  <button className="transition-all duration-300 ease-linear text-xl tracking-wide bg-gray-600 hover:bg-gray-400 text-white py-3 px-4 mr-2 my-2 rounded-md w-44 mt-4" disabled>
                     Out of Stock
                  </button>
               )}
               {inStock && (
                  <Link to="/cart">
                     <button className="transition-all duration-300 ease-linear text-xl tracking-wide hover:text-white hover:bg-hovergreen text-darkgreen border-2 border-darkgreen py-3 px-4 mr-2 my-2 rounded-md w-44 mt-4" 
                     onClick={() => {
                        if (!cart.some(p => p.id === id)) {
                           dispatch(addToCart(item))
                        }
                     }}>
                        Buy Now
                     </button>  
                  </Link>             
               )}
               
            </div>
            
            
         </div>
      </div>
   )
}

export default ProductDetail;