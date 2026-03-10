import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { AnimatedLogin } from '../components/animatedLogin'

const backendUrl = import.meta.env.VITE_BACKEND_PORT

const Login = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate('/chat', { replace: true });
        }
    }, []);

    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });

    const onChangeHandler = (e) => {
        try {
            console.log(e.target.name, e.target.value);
            setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value })
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            console.log("login clicked")
            const { data } = await axios.post('/login', loginFormData);

            console.log("loginformdata : ", loginFormData);
            console.log("data.otherdata.jwtToken : ", data.user.jwtToken)
            localStorage.setItem("token", data.user.jwtToken)
            localStorage.setItem("userId", data.user._id)
            navigate('/chat')
            console.log(data);
        } catch (error) {
            console.log(error)
            if (error.response && error.response.status === 403) {
                alert(error.response.data.message);
            }
            if (error.response && error.response.status === 401) {
                alert(error.response.data.message);
                localStorage.removeItem("token");
                localStorage.removeItem("userId");
                navigate('/login');
            }
        }
    }
    return (
        <AnimatedLogin
            loginFormData={loginFormData}
            onChangeHandler={onChangeHandler}
            onSubmitHandler={onSubmitHandler}
        />
    )

}

export default Login