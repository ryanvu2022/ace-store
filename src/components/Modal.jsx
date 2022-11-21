import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

const Modal = () => {
   const dispatch = useDispatch();   

   return (
     <aside className="fixed z-50 top-0 left-0 w-full h-full bg-black opacity-70 flex justify-center items-center">
       <div className="bg-white ss:max-w-xl max-w-sm rounded px-10 py-8 text-center">
         <h4 className="capitalize leading-normal mb-4 text-darkblue font-semibold text-xl">Remove all items from your shopping cart?</h4>
         <div className="flex justify-around">
           <button type="button" className="mt-4 uppercase transition-all duration-300 ease-linear bg-white text-darkblue border-2 border-darkblue hover:bg-darkblue hover:text-white font-medium px-6 py-2 rounded tracking-wider" 
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}>
             Confirm
           </button>
           <button type="button" className="mt-4 uppercase transition-all duration-300 ease-linear bgwhite text-darkred border-2 border-darkred hover:bg-darkred hover:text-white font-medium px-7 py-2 rounded tracking-wider"
            onClick={() => dispatch(closeModal())}>
             Cancel
           </button>
         </div>
       </div>
     </aside>
   );
 };

 export default Modal;