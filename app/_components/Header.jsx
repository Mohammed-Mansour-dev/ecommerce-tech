"use client"





     // GET CART FUNCTION
     // LOGO 
     //   Header Middle Navigation  
      // login and register buttons
     // Cart Icon
     //   menu  Nav for md devices     
     //  small devices nav 
      // Cart popup







import { UserButton, useUser } from '@clerk/nextjs'
import { PanelTopClose, ShieldClose, ShoppingBag, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../_context/CartContext'
import CartApis from '../_utils/CartApis'
import Cart from './Cart'

function Header() {


const path =usePathname();
const {user} =useUser()
const {cart,setCart} =useContext(CartContext);
const {openCart, setOpenCart} =useContext(CartContext);
const [openMenuIcon , setOpenMenuIcon ] = useState(false)

// GET CART FUNCTION
const getCart_ = ()=>{
CartApis.getCart(user.primaryEmailAddress.emailAddress)
.then(res =>{
res.data?.data?.forEach(itemCart => setCart(e => [
  ...e,
  {
    id:itemCart.id,
    product:itemCart?.attributes?.products?.data[0]
  }]))}).catch(error =>{
  console.log(error,"cart fetch error")})}

useEffect(
  ()=> {
      user && getCart_()
     }
     ,[user])


  return (
    !path.includes("sign-in") && (
      <header className="bg-primary  p-5 relative ">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
  
  {/* LOGO */}
    <Link className="block text-teal-600" href="/">
    <Image src="/logo.jpg"
    className='object-cover overflow-hidden rounded-xl  '
    width={85} height={85} alt="logo" />
    </Link>


    <div className="flex flex-1 items-center justify-end md:justify-between">
    
    {/*   Header Middle Navigation  */}
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a className="header-link-style"
             href="#"> Home  </a>
          </li>

          <li>
            <a className="header-link-style"
             href="#"> Explore </a>
          </li>

          <li>
            <a className="header-link-style"
             href="#"> Projects </a>
          </li>

          <li>
            <a className="header-link-style"
             href="#"> About Us </a>
          </li>

          <li>
            <a className="header-link-style"
             href="#"> Contact Us </a>
          </li>

        </ul>
      </nav>

      <div className="flex items-center gap-4">

{ // login and register buttons
    !user   ? (
<div className="sm:flex sm:gap-4">
          <Link
            className="block rounded-md bg-secondary
             px-5 py-2.5 text-sm font-medium
              text-white transition
               hover:opacity-80"
            href="/sign-in"
          >
            Login
          </Link>

          <Link
            className="hidden rounded-md bg-gray-100 px-5 py-2.5
             text-sm font-medium text-secondary transition
              hover:text-teal-600/75 sm:block"
            href="/sign-up"
          >
            Register
          </Link>
        </div>
)  :(
  // Cart Icon
  <div className="flex gap-2 items-center mr-2 select-none " >
    <div onClick={()=> setOpenCart(!openCart)} className="flex py-1 text-neutral-300 items-center  cursor-pointer " >
      <ShoppingBag />
      <span>({cart.length})</span>
    </div>
    <div className="max-md:hidden" >
    <UserButton />

    </div>
  </div>
)}
        
{/*   menu Nav for md devices     */}
        <button
        onClick={()=>setOpenMenuIcon(!openMenuIcon)}
          className="block rounded bg-gray-500 p-2.5 text-gray-100 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
{/*  small devices nav */}
{ 

<div className={`md:hidden overflow-hidden absolute bg-gray-600 inset-0 duration-700 transition-all h-full ${ openMenuIcon ? "left-0" : "left-[100%]"} `} >

<div className='flex items-center w-full h-full justify-between p-3 ' >

<button onClick={()=>setOpenMenuIcon(!openMenuIcon)} >
  <X className='text-gray-300 p-2 size-10' />
</button>


{
  user ? (
    <UserButton />
  ):(
<div>
<Link href="/sign-in" className='text-gray-300  bg-secondary px-3 py-2 mx-1 rounded-lg ' >Login</Link>
  
<Link href="/sign-up" className='text-gray-300  border border-secondary px-3 py-2 mx-1 rounded-lg ' >Register</Link>

</div>
  )
}


</div>


</div>
}
      </div>
    </div>
  </div>

{ // Cart popup
  openCart && <Cart/>
}
</header>)  )
    
  
  
}

export default Header