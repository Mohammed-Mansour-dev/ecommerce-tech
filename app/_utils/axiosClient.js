const { default: axios } = require("axios")

const apiUrl =`https:tech2ecommerce2db.onrender.com/api`
// const apiUrl =`http://localhost:1337/api`
// 
const db_Key ="8c1efe61e63739956a8df0c94f7b584b7d1dc0079517270b388df40ea41c0d46df8abf52329859872bfdf225e632125b370bf7eb3c23dbaad5952b5c9294327ff9a449038a63e9bfa670004a628a3a65369e7ff38574be714220c2078e695adb93e8d68ebfe04567c08ea81a5110a8daf22aa83fcc353e6b704eb538f3968361"


const axiosClient =axios.create({
    baseURL:apiUrl,
     headers:{
       Authorization:`Bearer ${db_Key}`
    }
})


export default axiosClient;