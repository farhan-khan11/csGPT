import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.MAIN_PORT

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
            const { data } = await axios.post(`http:/${PORT}:3000/login`, loginFormData);
            console.log("data : ", loginFormData);
            localStorage.setItem("token", data.otherdata.jwtToken)
            navigate('/chat')
            console.log(data);
        } catch (error) {
            console.log(error)
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