const { default: axios } = require("axios")

const apiUrl =`https:tech2ecommerce2db.onrender.com/api`
// const apiUrl =`http://localhost:1337/api`
// 
const db_Key =process.env.DB_URL


const axiosClient =axios.create({
    baseURL:apiUrl,
     headers:{
       Authorization:`Bearer ${db_Key}`
    }
})


export default axiosClient;