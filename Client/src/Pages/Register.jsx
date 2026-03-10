import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { AnimatedRegister } from '../components/animatedRegister'
const backendUrl = import.meta.env.VITE_BACKEND_PORT

const Register = () => {

    const navigate = useNavigate();

    const [registerFormData, setRegisterFormData] = useState({ email: "", password: "" });

    const onChangeHandler = (e) => {
        try {
            console.log(e.target.name, e.target.value);
            setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value })
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/register', registerFormData);

            console.log("data : ", data);

            if (data.success) {
                navigate('/login', { replace: true })
            }
        } catch (error) {
            console.log(error)
            if (error.response.data.message) {
                alert(error.response.data.message)
            }
        }
    }

    return (
            <AnimatedRegister
                registerFormData={registerFormData}
                onChangeHandler={onChangeHandler}
                onSubmitHandler={onSubmitHandler}
            />
        )
}

export default Register