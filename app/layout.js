"use client"


import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import 'react-loading-skeleton/dist/skeleton.css'
import  {Roboto} from "next/font/google"
import { SkeletonTheme } from "react-loading-skeleton";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { CartContext } from './_context/CartContext';
import { useState } from "react";
import { ToastContainer } from 'react-toastify';


const roboto =Roboto({weight:"700",subsets:["latin"]})

export default function RootLayout({ children }) {

const [cart,setCart] =useState([]);
const [openCart, setOpenCart] = useState(false)
const  [amount ,setAmount] =useState(0)



  return (
    <ClerkProvider>
      <CartContext.Provider  value={{amount ,setAmount ,cart,setCart,openCart, setOpenCart}} >
        <html lang="en">
      <body className={roboto.className} >
          <SkeletonTheme baseColor="#1C375E" highlightColor="#444">
     
     <div className='w-full bg-primary/90' >
      <div className='max-w-screen-xl mx-auto  border-x border-primary/50 ' >

            <Header />
        {children}
          <ToastContainer /> 
           <Footer/>
      </div>
     </div>
      
    
        </SkeletonTheme>
      </body>
    </html>

      </CartContext.Provider>
    </ClerkProvider>
  );
}
