

//   continue button 
//   view cart button 
//   elements map 
//   Cart popup









import React, { useContext } from 'react'
import Link from 'next/link'
import { CartContext } from '../_context/CartContext'
function Cart() {
	
const {cart , setCart} =useContext(CartContext);
const {openCart, setOpenCart} =useContext(CartContext);

	return (
		<>
			<div onClick={()=> setOpenCart(false)} className="absolute inset-0 bg-black/30 backdrop-blur-[1px] h-screen z-10 "/>
		<div className='h-[300px] w-[250px]
    bg-gray-100 z-20 rounded-md border shadow-sm
    absolute mx-10 right-10 top-[70%] p-5 overflow-auto'>
			<div className="mt-4 space-y-6">
				<ul className="space-y-4">
					

{
//     elements map 
cart.map(item =>(
<div key={item.id} >
<li  className="flex items-center gap-4">
		<img
			src={item.product.attributes.banner.data.attributes.url}
			alt="Product Image"
			className="object-cover w-16 h-16 rounded"
		/>

		<div>
			<h3 className="text-sm text-gray-900 line-clamp-1">{item.product.attributes.title}</h3>
			<dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
				<div>
					<dt className="inline">Category:</dt>
					<dd className="inline">{item.product.attributes.category}</dd>
									</div>

									<div>
										<dt className="inline">Price:</dt>
										<dd className="inline">{item.product.attributes.price}</dd>
									</div>
								</dl>
							</div>
						</li>
				
</div>

))

}

						

				

				</ul>
			</div>
			<div className="mt-5 space-y-4 text-center">

{/* view cart button */}
				<Link
				onClick={()=>setOpenCart(false)}
					href="/Cart"
					className="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600"
				>
					View my cart ({cart.length})
				</Link>
{/* continue button */}
				<Link
					href="/"
					className="inline-block text-sm text-gray-500 underline transition underline-offset-4 hover:text-gray-600"
				>
					Continue shopping
				</Link>
			</div>
		</div></>
	
	)
}

export default Cart