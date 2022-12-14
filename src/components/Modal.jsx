import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

const Modal = () => {
   const dispatch = useDispatch();   

   return (
     <aside className="fixed z-50 top-0 left-0 w-full h-full bg-darkgreen opacity-100 flex justify-center items-center">
       <div className="bg-white rounded px-10 py-8 text-center">
         <h4 className="capitalize leading-normal mb-4 text-darkgreen font-bold text-xl">Remove all items from your shopping cart?</h4>
         <div className="flex justify-around">
           <button type="button" className="mt-4 font-bold uppercase transition-all duration-300 ease-linear bg-white text-darkgreen border-2 border-darkgreen hover:bg-darkgreen hover:text-white font-medium px-6 py-2 rounded tracking-wider" 
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}>
             Confirm
           </button>
           <button type="button" className="mt-4 font-bold uppercase transition-all duration-300 ease-linear bgwhite text-darkred border-2 border-darkred hover:bg-darkred hover:text-white font-medium px-7 py-2 rounded tracking-wider"
            onClick={() => dispatch(closeModal())}>
             Cancel
           </button>
         </div>
       </div>
     </aside>
   );
 };

 export default Modal;