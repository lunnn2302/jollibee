import axios from '~/axios';
// import * as queryString from 'query-string';

const adminService = {
    /**
     * Đăng nhập hệ thống
     * {
     *  "username": "string",
     *  "password": "string"
     * }
     */
    login(loginBody) {
        return axios.post(`/api/login`, loginBody);
    },
};

export default adminService;
