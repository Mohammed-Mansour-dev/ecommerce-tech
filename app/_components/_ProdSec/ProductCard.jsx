import { TableOfContents } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProductCard({data}) {
 return (
 <Link href={`/productDetails/${data.id}`} className='p-1 mx-auto mt-2 rounded-xl
      flex flex-col justify-center w-fit pb-2 max-sm:-[100%]
      bg-gray-700 border shadow-md transition-all border-gray-700 hover:border-gray-500' >
        
        <Image
        className=' mx-auto object-cover w-full rounded-t-xl h-48'
        src={data?.attributes?.banner?.data?.attributes?.url} width={300} height={300} alt="Banner Image"  />
  <div className=' py-2  px-2 ' >
    <h1 className="text-gray-200 line-clamp-1 " >{data?.attributes?.description[0]?.children[0]?.text}</h1>
  
  <div className='flex my-2 items-center justify-between ' >
    <h1 className='flex text-gray-400 text-base gap-1 justify-center items-center' >
    <TableOfContents size={15} />
      {data.attributes.category}
    </h1>
    <h1 className="text-gray-300" >${data.attributes.price}</h1>
  </div> 
  
  
  </div>
  
  
      </Link>
  )
}

export default ProductCard