import axios from 'axios';
import router from '../router';

const requestAxios = axios.create({
    baseURL: 'https://vue-online-bank-fe75f-default-rtdb.firebaseio.com'
})

requestAxios.interceptors.response.use(null, error => {
    if (error.response.status === 401) {
        router.push('/auth?message=forbid');
    }

    return Promise.reject(error);
});

export default requestAxios