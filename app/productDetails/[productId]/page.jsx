"use client"
import BreadCrumbs from '@/app/_components/BreadCrumbs';
import ProductApis from '@/app/_utils/ProductApis'
import React, { useEffect, useState } from 'react'
import ProductInfo from './_components/ProductInfo';
import ProductList from '@/app/_components/_ProdSec/ProductList';
import { usePathname } from 'next/navigation';

function page({params}) {

  const [data, setData] = useState({});
  const [categoryData, setCategoryData] = useState([]);
const path =usePathname();
 
  const getProductById_ = () => {
    ProductApis.getProductById(params?.productId).then((res) => {
      setData(res?.data?.data);
      getProductsByCategory_(res?.data?.data)
    });
  };


   const getProductsByCategory_ =(data1)=>{
    ProductApis.getProductByCategory(data1.attributes.category).then((res) => { 
      setCategoryData(res?.data?.data)
     })
  }

 useEffect(() => {
    getProductById_();
  }, [params?.productId]);

  return (
    <div className='bg-primary/95 min-h-full py-8 px-10 md:px-28 ' >
      <BreadCrumbs path={path} />
<ProductInfo product={data} />

<div className='pt-10 md:pt-20 ' >

<h1 className='text-white text-2xl font-bold ' >Similar Products</h1>

<ProductList data={categoryData} />

</div>




    </div>
  )
}

export default page