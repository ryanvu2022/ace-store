import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart, calculateSubtotal } from "../features/cart/cartSlice";
import { openModal } from "../features/modal/modalSlice";
import Modal from "./Modal";

const Cart = () => {
   const { cart, subtotal } = useSelector(store => store.cart);
   const { isOpen } = useSelector(store => store.modal);
   const dispatch = useDispatch();

   const [tax, setTax] = useState(0);
   const [total, setTotal] = useState(0);

   useEffect(() => {
      setTax(subtotal * 0.13);
   }, [subtotal]);

   useEffect(() => {
      setTotal(subtotal + tax);
   }, [subtotal, tax]);

   useEffect(() => {
      dispatch(calculateSubtotal());
   }, [cart, dispatch]);

   return (
      <div className="min-h-screen w-[90vw] mx-auto my-0 px-0 py-10 max-w-4xl">
         {isOpen && <Modal />}
         <header>
            <h2 className="text-center text-darkgreen mb-12 text-4xl font-medium capitalize">Your Cart</h2>
         </header>
         {cart.length > 0 
         ? <>
            {cart.map(item => (<CartItem key={item.id} item={item} />))}
            
            <footer className="flex flex-col">
               <hr className="border border-transparent bg-black"/>
               <div className="text-center mt-4">
                  <h4 className="capitalize flex justify-between text-darkgreen font-medium text-xl mb-2 tracking-wider">
                     Subtotal <span>${subtotal.toFixed(2)}</span>
                  </h4>
                  <h4 className="capitalize flex justify-between text-darkgreen font-medium text-xl mb-2 tracking-wider">
                     Tax (13%) <span>${tax.toFixed(2)}</span>
                  </h4>
                  <h4 className="capitalize flex justify-between text-darkgreen font-medium text-xl mb-2 tracking-wider">
                     Total <span>${total.toFixed(2)}</span>
                  </h4>
               </div>
               <button className="transition-all duration-300 ease-linear text-darkred text-xl mt-4 items-center font-medium rounded bg-white border-2 border-solid border-darkred w-2/5 mx-auto py-2 tracking-widest hover:text-white hover:bg-darkred" onClick={() => dispatch(openModal())}>
                  Clear Cart
               </button>
               <button className="transition-all duration-300 ease-linear mt-4 text-darkgreen bg-white hover:text-white hover:bg-darkgreen text-xl items-center font-medium rounded border-2 border-solid border-darkgreen w-2/5 mx-auto py-2 tracking-widest hover:bg-darkgreen" onClick={() => {
                  alert("Thank you for your order!");
                  dispatch(clearCart())
               }}>
                  Checkout
               </button>
            </footer>
         </>
         :  <div className="flex flex-col gap-10">
               <div className="text-center font-medium tracking-wider text-xl -mt-6">is currently empty</div>
               <Link to="/" className="transition-all duration-300 ease-linear text-center text-white text-xl items-center font-medium rounded bg-darkgreen hover:bg-green-500 ss:w-2/5 w-64 mx-auto py-3 tracking-widest">
                  Start shopping
               </Link>                    
            </div>       
         }
      </div>
   )
}

export default Cart;