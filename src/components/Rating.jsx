import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick }) => {
   return (
      <>
         {[...Array(5)].map((_, index) => (
            <span 
               key={index} 
               onClick={() => onClick(index)} 
               className="flex items-center mt-1 cursor-pointer"    
            >
               {rating > index 
                  ? <AiFillStar style={{fontSize:"15px", paddingBottom:"-20px"}} />
                  : <AiOutlineStar style={{fontSize:"15px", paddingBottom:"-20px"}} />
               }
            </span>
         ))}
      </>
   )
}

export default Rating;