import axios from 'axios';

const $host = axios.create({
    baseURL: 'http://localhost:5000/' 
});

const $authhost = axios.create({
    baseURL: 'http://localhost:5000/'   
})

const authIntercaptor = (config: any)=> {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config
}

$authhost.interceptors.request.use(authIntercaptor)

export {
    $host,
    $authhost
}