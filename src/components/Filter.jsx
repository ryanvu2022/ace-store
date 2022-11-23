import { Form, Button } from "react-bootstrap";
import Rating from './Rating';
import { useSelector, useDispatch } from "react-redux";
import { sortByPrice, filterByStock, filterByDelivery, filterByRating, clearFilters } from "../features/product/productSlice";

const Filter = () => {
   const { byRating, byFastDelivery, byStock, sort } = useSelector(store => store.product)
   const dispatch = useDispatch();
   
   return (
      <div className="flex flex-col sm:w-96 w-full bg-white mt-3 p-4 text-darkgreen h-56 sm:h-full">
         <span className="pb-3 text-2xl sm:text-xl sm:text-left sm:ml-2 text-center font-medium underline">Filter Products</span>
         <div className="flex flex-row sm:flex-col justify-evenly">
            <div className="flex flex-col">
               <span className="text-lg sm:text-base sm:mb-2 sm:ml-1">
                  <Form.Check 
                     inline
                     label=" Price Low to High"
                     name="group1"
                     type="radio"
                     id={`inline-1`}
                     onChange={() => dispatch(sortByPrice("lowToHigh"))}
                     checked={sort === "lowToHigh" ? true: false}                 
                  />
               </span>

               <span className="text-lg sm:text-base sm:mb-2 sm:ml-1">
                  <Form.Check 
                     inline
                     label=" Price High to Low"
                     name="group1"
                     type="radio"
                     id={`inline-2`}        
                     onChange={() => dispatch(sortByPrice("highToLow"))}
                     checked={sort === "highToLow" ? true : false}             
                  />
               </span>
            </div>

            <div className="flex flex-col">
               <span className="text-lg sm:text-base sm:mb-2 sm:ml-1">
                  <Form.Check 
                     inline
                     label=" Fast Delivery"
                     name="group1"
                     type="checkbox"
                     id={`inline-3`}
                     onChange={() => dispatch(filterByDelivery())}
                     checked={byFastDelivery}                
                  />
               </span>

               <span className="text-lg sm:text-base sm:mb-2 sm:ml-1">
                  <Form.Check
                     inline
                     label=" In Stock Only"
                     name="group1"
                     type="checkbox"
                     id={`inline-4`}
                     onChange={() => dispatch(filterByStock())}
                     checked={byStock}                   
                  />
               </span>        
            </div>         
         </div>
         
         <span className="flex flex-row justify-center sm:justify-start mb-1">
            <label className="pr-2.5 text-lg sm:text-base">Rating: </label>
            <Rating 
               rating={byRating}
               onClick={(index) => dispatch(filterByRating(index+1))}                            
            />
         </span>

         <Button className="transition-all duration-300 ease-linear border-2 hover:border-2 hover:bg-hovergreen bg-darkgreen text-white tracking-wide rounded p-1 font-medium text-lg sm-text-base w-1/2 sm:w-full mx-auto mt-2" onClick={() => dispatch(clearFilters())}>Clear Filter</Button>    
            
      </div>
   )
}

export default Filter;