import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
   return (
      <div className="flex flex-col justify-center items-center mt-20 mb-4 text-lg tracking-wider">
         <p className=" flex flex-row">Ryan Vu 
            <span className="relative top-1.5 mx-1"><AiOutlineCopyrightCircle /></span> 
            {new Date().getFullYear()} </p>
         <div>
            Images from <a href="https://www.uniqlo.com/ca/en/men/tops/ut-graphic-tees">UNIQLO</a>
            <img className="w-5 relative bottom-0.5 inline ml-1" src="https://tinyurl.com/uniqloz" />                                    
         </div>
      </div>
   )
}

export default Footer