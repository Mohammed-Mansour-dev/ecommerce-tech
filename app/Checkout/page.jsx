
"use client"
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

// pages/payment.js
import { useContext, useState } from 'react';
import { Bounce, toast } from "react-toastify";
import { CartContext } from "../_context/CartContext";
import orderApis from "../_utils/orderApis";
import CartApis from "../_utils/CartApis";
 
export default function PaymentForm() {

  const router =useRouter();
  const {user} =useUser();
  const {cart ,setCart ,amount ,setAmount} =useContext(CartContext);
  
  const sendEmail = async () => {
		const res = await fetch('api/send', {
			method: 'POST',
			body: JSON.stringify({
				amount: amount,
				email: user.primaryEmailAddress.emailAddress,
				fullName: user.fullName
			})
		})
	}






  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add payment processing logic here
    console.log(formData);

    router.push("/"); 
    toast.info("payed successfully",{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,});

      createOrder_()
      sendEmail()
  };




 const createOrder_ =()=> {

  let productIds =[];
  cart.forEach(item => productIds.push(item?.product?.id))

const data ={
  data: {
    username: user.fullName,
    email: user.primaryEmailAddress.emailAddress,
    products: productIds,
    amount: amount,
  },
}

orderApis.createOrder(data).then(res=>{
if(res){
  cart.forEach(item => CartApis.deleteItemFromCart(item?.id).then(result =>{setCart([])}) )
}
})


 }





  return (
    <div className="min-h-[80vh] bg-primary/95 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-700 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4 text-center">Payment Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 font-semibold">Name on Card</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-300 font-semibold">Card Number</label>
            <div className="relative">
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 pr-12"
                placeholder="1234 5678 9012 3456"
                required
              />
              {/* Icons for Visa, MasterCard, etc. */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <img
                  src="/Visa.svg" // Replace with actual icon paths or links
                  alt="Visa"
                  className="h-6 w-6 mx-1"
                />
                <img
                  src="/Mastercard-logo.svg" // Replace with actual icon paths or links
                  alt="MasterCard"
                  className="h-6 w-6 mx-1"
                />
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <div>
              <label className="block text-gray-300 font-semibold">Expiration Date</label>
              <input
                type="text"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="MM/YY"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 font-semibold">CVV</label>
              <input
                  type="text"
  inputMode="numeric"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 
                rounded-md focus:outline-none 
                focus:ring
                 focus:ring-blue-200
                 "
                placeholder="123"
                required
              />
            </div>
          </div>
          

          {/* Payment button */}
          <div>
            <button 
           
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
