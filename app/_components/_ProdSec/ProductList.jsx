import React from 'react'
import ProductCard from './ProductCard'

function ProductList({data}) {

  return (
    <div className='grid grid-cols-1
     sm:grid-cols-2 md:grid-cols-3
      gap-3 lg:grid-cols-4' >

{
 
 data.length > 0 ? (
 data.map((item)=>(
    <div key={item.id} >
          <ProductCard data={item} /> 
   </div>
  ))

 ):(
<h1 className='text-center text-white text-3xl' >Loading....</h1>
 )
 



}

    </div>
  )
}

export default ProductList