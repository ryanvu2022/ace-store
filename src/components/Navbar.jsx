import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CartIcon } from "../icons";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import DropdownCart from "./DropdownCart";
import icons from "../products/icons";

const Navbar = () => {
   const { amount } = useSelector(store => store.cart)

   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   return (
      <nav className="bg-baseColor max-w-[1280px] mx-auto w-full px-4 pb-2 pt-3 text-darkgreen sticky z-50 inset-x-0 top-0 border-b-2 border-x-2 block">
         <div className="w-full flex justify-between items-center m-0">
            <h2 className="mb-0 tracking-widest text-3xl cursor-pointer">
               <Link to="/" onClick={() => setIsDropdownOpen(false)}>
                  <img src={icons.logo} className="h-16" />
               </Link>
            </h2>

            <Dropdown>
               <Dropdown.Toggle>
                  <div className="block relative cursor-pointer mr-4" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                     <CartIcon />
                     <div className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-lightgreen rounded-full flex items-center justify-center">
                        <p className="mb-0 text-lg text-darkgreen font-medium">{amount}</p>
                     </div>              
                  </div>         
               </Dropdown.Toggle>
               <Dropdown.Menu className="z-10 flex flex-col bg-[#F9F9F9] rounded border-solid shadow-2xl border-2 border-gray-300">
                  {isDropdownOpen && <DropdownCart setIsDropdownOpen={setIsDropdownOpen}/>}
               </Dropdown.Menu>
            </Dropdown>
         </div>
      </nav>
   )
}

export default Navbar