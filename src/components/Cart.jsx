import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart, calculateTotal } from "../features/cart/cartSlice";
import { openModal } from "../features/modal/modalSlice";
import Modal from "./Modal";

const Cart = () => {
   const { cart, total } = useSelector(store => store.cart);
   const { isOpen } = useSelector(store => store.modal);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(calculateTotal());
   }, [cart, dispatch])

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
                  <h4 className="capitalize flex justify-between text-darkgreen font-medium text-xl">
                  Total <span>${total}</span>
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
         : <div className="text-center font-medium tracking-wider text-xl text-darkgreen">is currently empty</div>         
         }
      </div>
   )
}

export default Cart;