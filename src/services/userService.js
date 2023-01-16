import axios from 'axios';

const handleLogin = (email, password) => {
    return axios.post('http://localhost:8000/api/login', { email, password });
};

export default handleLogin;
