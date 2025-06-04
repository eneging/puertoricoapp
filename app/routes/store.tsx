import React from 'react'
import Products from '../src/pages/products'

import { mockProducts } from '../src/componets/mockProducto'
import ProductCard from '../src/componets/ProductCard'




function Store() {
  return (
   
       <main  className=" bg-amber-400  h-screen flex justify-center "
              >
            
            <div className="text-black  flex ">
   
             <div className="hidden"></div>
             <div className=" lg:w-7xl w-screen h-fit    bg-white shadow-2xl">
              
           


                <div className=" p-5  grid grid-cols-1  gap-x-6 gap-y-10 sm:grid-cols-2  lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8
                \">
      {mockProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

 
    </div>
              
             </div>
             <div className="hidden ">
            
              
              
             </div>
            </div>

            
       </main>
  )
}

export default Store