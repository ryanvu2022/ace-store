import React from 'react';
import { ChevronUp, ChevronDown } from '../icons';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, increase, decrease } from '../features/cart/cartSlice';

const CartItem = ({ item }) => {
   const dispatch = useDispatch();

   return (
      <div className="grid items-center grid-cols-cartgrid gap-x-6 my-6 mx-0">
         <Link to={`/product/${item._id}`}>
            <img src={item.image} alt={item.name} className="rounded w-24 h-24 object-cover" />
         </Link>
         <div>
            <h4 className="text-lg font-medium mb-2">{item.name}</h4>
            <h4 className="font-medium mb-2 tracking-wider">CAD ${item.price}</h4>
            <button className="font-medium tracking-wide hover:text-red-600" onClick={() => dispatch(removeFromCart(item._id))}>
            Remove
            </button>
         </div>

         <div>
            <button className="text-darkgreen" onClick={() => dispatch(increase(item._id))}>
               <ChevronUp />
            </button>

            <p className="text-center text-xl leading-none relative bottom-1">{item.quantity}</p>

            <button className="text-darkgreen" onClick={() => dispatch(decrease(item._id))}>
               <ChevronDown />
            </button>
         </div>
      </div>
   )
}

export default CartItem;