import axios from 'axios';

const axiosInstance = axios.create({

    baseURL: 'https://battle-hpuk.onrender.com'

});


export default axiosInstance;
