import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { removeFromCart } from '../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const DropdownCart = ({ setIsDropdownOpen }) => {
   const { cart } = useSelector(store => store.cart);
   const dispatch = useDispatch();

   const [subtotal, setSubtotal] = useState(0);

   useEffect(() => {
      const total = cart.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);
      setSubtotal(total);
    }, [cart]);

   return (
      <div className="z-50 w-72 ss:w-full">
         {cart.length > 0
            ?  <>
                  <Link to="/cart" className="flex items-center justify-center">
                     <button className="transition-all duration-300 ease-linear bg-darkgreen text-white hover:bg-hovergreen text-xl tracking-wide w-full ss:py-3 py-2 px-4 m-4 mb-0 rounded" onClick={() => setIsDropdownOpen(false)}>
                        Go to Cart
                     </button>
                  </Link>
                  {cart.map(item => (
                     <span className="flex justify-between items-center mx-4 ss:mt-3 mt-2 ss:p-4 p-2 border border-darkgreen text-black rounded" key={item._id}>
                        <img src={item.image} alt={item.name}
                           className="rounded ss:w-12 ss:h-12 w-8 h-8 object-cover"
                        />
                        <div className="flex flex-col flex-1 px-5 py-0">
                           <span className="text-xs ss:text-base">{item.name}</span>
                           <span className="text-xs ss:text-base">${item.price}</span>

                        </div>
                        <AiFillDelete className="cursor-pointer ss:text-2xl text-xl" onClick={() => dispatch(removeFromCart(item._id))}/>
                     </span>
                  ))}

                  <h4 className="flex justify-between ss:text-lg text-base mx-5 ss:mt-2 mt-0 ss:mb-3 mb-2 text-black">
                     Subtotal <span>${subtotal.toFixed(2)}</span>
                  </h4>  
                  
               </>
            :  <div className="py-2 px-4 rounded">
                  <p className="text-darkgreen font-semibold text-lg">Cart is Empty!</p>
               </div>
         
         }
      </div>
   )
}

export default DropdownCart;