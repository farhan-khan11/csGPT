import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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
            // const { data } = await axios.post(`http://localhost:5050/api/auth/login`, loginFormData);
            const { data } = await axios.post(`${backendUrl}/login`, loginFormData);
            console.log("loginformdata : ", loginFormData);
            console.log("data.otherdata.jwtToken : ", data.user.jwtToken)
            localStorage.setItem("token", data.user.jwtToken)
            localStorage.setItem("userId", data.user._id)
            navigate('/chat')
            console.log(data);
        } catch (error) {
            console.log(error)
            if (error.response.data.message) {
                alert(error.response.data.message)
            }
        }
    }
    return (
        <>
            <div>Login Page</div>
            <form onSubmit={onSubmitHandler}>
                <div className='container'>
                    <p>Please fill the below details to login</p>
                    <hr />
                    <label htmlFor='email'>email :</label>
                    <input type='text' placeholder='Enter your email' name='email' id='email' onChange={onChangeHandler} />
                    <label htmlFor='password'>Password :</label>
                    <input type='password' placeholder='Enter password' name='password' id='password' onChange={onChangeHandler} />
                    <button type="submit" className="loginbtn">Login</button>

                </div>
            </form>
        </>
    )
}

export default Login