import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:3005/api'
});

export default instance;