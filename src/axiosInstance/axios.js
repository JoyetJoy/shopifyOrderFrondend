import axios from 'axios'


const axiosInstance=axios.create({
    baseURL:'https://shop-1tvt.onrender.com/api/',
    headers:{
        'Context-type' : 'application/json'
    },
    timeout:10000
})

export default axiosInstance;