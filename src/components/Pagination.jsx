import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
   const pageNumbers = []

   for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
   }

   return (
      <ul className="flex flex-wrap justify-center mx-10 mt-6">
         {pageNumbers.map(number => (
            <li key={number} className="cursor-pointer border w-12 px-3 py-1 text-center border-darkblue text-lg hover:bg-lightblue" onClick={() => paginate(number)}>
               {number}
            </li>
         ))}
      </ul>
   )
}

export default Pagination;