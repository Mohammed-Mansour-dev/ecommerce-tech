const { default: axiosClient } = require("./axiosClient")




const addToCart =(payload)=>(
     axiosClient.post("/carts",payload)
    ) ;
   
const getCart =(email)=>(
     axiosClient.get(`carts?populate[products][populate]=banner&filters[useremail][$eq]=${email}`)
    ) ;
   
const deleteItemFromCart =(id)=>(
axiosClient.delete(`/carts/${id}`)
)

    // /carts?populate[products][populate]=banner&filters[useremail][$eq][mohammed.develop@gmail.com]
export default {addToCart ,getCart ,deleteItemFromCart}

