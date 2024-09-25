"use client";

import { CartContext } from "@/app/_context/CartContext";
import CartApis from "@/app/_utils/CartApis";
import { useUser } from "@clerk/nextjs";
import { AlertOctagon, BadgeCheck, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import { Flip, toast } from "react-toastify";

function ProductInfo({ product }) {
  const { user } = useUser();
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);

  const handleCart = async () => {
    // if there isn't a user
    if (!user) {
      router.push("/sign-in");
    } else {
      //  ADD TO CART LOGIC
      const dataCart = {
        data: {
          username: user.fullName,
          useremail: user.primaryEmailAddress.emailAddress,
          products: [product?.id],
        },
      };

      CartApis.addToCart(dataCart).then((res) => {
        setCart(e => [...e,
         { id: res.data?.data?.id,
product}
        ]);
      }).catch(error => console.log(error,"Something went wrong"))
      

    
    }
  };

  return (
    <div className="mb-1 pt-7 md:pt-14 ">
      <div className="flex  flex-col md:grid gap-3 md:grid-cols-2 h-full ">
        {/* Banner */}
        <div className="rounded-2xl  mx-auto w-full h-72  ">
          {product?.attributes?.banner?.data?.attributes?.url ? (
            <Image
              className="rounded-2xl  mx-auto w-full lg:w-[90%] h-72 object-fill "
              src={product?.attributes?.banner?.data?.attributes?.url}
              //  src="https://res.cloudinary.com/dko62z7ix/image/upload/v1726476226/thumbnail_download1_77b3881e1e.png"
              alt="Info Image"
              width={300}
              height={300}
            />
          ) : (
            <Skeleton className="h-full w-full" />
          )}
        </div>

        {/* Details */}
        <div className="gap-2 flex flex-col px-2 ">
          <h1 className="text-neutral-200 font-bold text-2xl   ">
            {product?.attributes?.title || <Skeleton />}
          </h1>

          <h1 className="text-gray-400 text-lg ">
            {product?.attributes?.category || <Skeleton />}
            {/* web development */}
          </h1>
          <h1 className="text-white text-sm ">
            {product?.attributes?.description[0]?.children[0]?.text || (
              <Skeleton />
            )}
            {/* HTML Tutorial ... HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it! */}
          </h1>

          {product?.attributes?.instantDelivery ? (
            <h1 className="flex gap-2 text-gray-400 text-sm items-center">
              {product?.attributes?.instantDelivery ? (
                <BadgeCheck color="green" />
              ) : (
                <AlertOctagon color="red" />
              )}
              Eligible for instant Delivery{" "}
            </h1>
          ) : (
            <Skeleton />
          )}

          {product?.attributes?.price ? (
            <>
              <h1 className="text-3xl flex text-secondary mt-1 ">
                ${product?.attributes?.price}
              </h1>

              {/* ADD TO CART BUTTON */}
              <button
                onClick={()=>{
                  handleCart()
                  toast.success('Product added successfully',{
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Flip,});
                }}
                className="flex gap-2 items-center bg-secondary px-6 py-3 hover:pointer w-fit rounded-2xl text-gray-200 "
              >
                <ShoppingCart />
                Add to Cart
              </button>
            </>
          ) : (
            <Skeleton />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
