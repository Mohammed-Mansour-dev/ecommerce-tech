"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductApis from "@/app/_utils/ProductApis";

function ProductsSection() {
  const [productData, setProductData] = useState([]);

  const getAllProducts_ = () => {
    ProductApis.getLatestProducts().then((res) => {
      console.log(res.data.data);
      setProductData(res.data.data);
    });
  };

  useEffect(() => {
    getAllProducts_();
  }, []);

  return (
    <div className="bg-primary  py-10 px-5">
      <ProductList data={productData} />
    </div>
  );
}

export default ProductsSection;

