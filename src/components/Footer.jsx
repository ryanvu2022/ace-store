import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import icons from "../products/icons";

const Footer = () => {
   return (
      <div className="flex flex-col mt-20 gap-10 flex-wrap">
         <div className="flex justify-center gap-8 flex-wrap max-w-[70%] mx-auto">
            <img src={icons.facebook} className="w-10 cursor-pointer" />
            <img src={icons.instagram} className="w-10 cursor-pointer" />
            <img src={icons.twitter} className="w-10 cursor-pointer" />
            <img src={icons.snapchat} className="w-10 cursor-pointer" />
            <img src={icons.tiktok} className="w-10 cursor-pointer" />
            <img src={icons.tumblr} className="w-10 cursor-pointer" />
            <img src={icons.youtube} className="w-10 cursor-pointer" />
         </div>
         <div className="flex flex-col justify-center items-center mb-4 text-lg tracking-wider">
            <p className=" flex flex-row">Ryan Vu 
               <span className="relative top-1.5 mx-1"><AiOutlineCopyrightCircle /></span> 
               {new Date().getFullYear()} </p>
            <div>
               Images from <a href="https://www.uniqlo.com/ca/en/women/bottoms/bottoms-collections" className="italic underline">UNIQLO</a>
               <img className="w-5 relative bottom-0.5 inline ml-1" src="https://tinyurl.com/uniqloz" />                                    
            </div>
         </div>
      </div>
      
   )
}

export default Footer