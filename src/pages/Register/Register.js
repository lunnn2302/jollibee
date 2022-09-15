import { useEffect } from 'react';

function Register() {
    useEffect(() => {
        document.title = 'Đăng ký tài khoản';
    }, []);
    return <h1>Register</h1>;
}

export default Register;
