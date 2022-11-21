import React from 'react';
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { removeFromCart } from '../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const DropdownCart = ({ setIsDropdownOpen }) => {
   const { cart } = useSelector(store => store.cart);
   const dispatch = useDispatch();

   return (
      <div>
         {cart.length > 0
            ?  <>
                  {cart.map(item => (
                     <span className="flex justify-between items-center mx-4 mt-4 p-4 shadow-2xl border border-darkblue text-black rounded" key={item.id}>
                        <img src={item.image} alt={item.name}
                           className="rounded w-12 h-12 object-cover"
                        />
                        <div className="flex flex-col flex-1 px-5 py-0">
                           <span>{item.name}</span>
                           <span>${item.price}</span>

                        </div>
                        <AiFillDelete className="cursor-pointer text-2xl" onClick={() => dispatch(removeFromCart(item.id))}/>
                     </span>
                  ))}
                  <Link to="/cart" className="flex items-center justify-center">
                     <button className="transition-all duration-300 ease-linear bg-darkblue text-white hover:bg-blue-500 text-xl tracking-wide w-full py-2 px-4 m-4 rounded" onClick={() => setIsDropdownOpen(false)}>
                        Go to Cart
                     </button>
                  </Link>
               </>
            :  <div className="bg-gray-300 py-2 px-4 rounded">
                  <p className="text-darkblue font-semibold text-lg ">Cart is Empty!</p>
               </div>
         
         }
      </div>
   )
}

export default DropdownCart;