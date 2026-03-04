import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {

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
        try {
            e.preventDefault();
            const { data } = await axios.post(`http://localhost:5050/api/auth/register`, registerFormData);
            console.log("data : ", registerFormData);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div>Register Page</div>
            <form onSubmit={onSubmitHandler}>
                <div className="container">
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        id="email"
                        onChange={onChangeHandler}
                        required
                    />


                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        placeholder="Enter Your Password"
                        name="password"
                        id="password"
                        onChange={onChangeHandler}
                        required
                    />
                    <hr />

                    <button type="submit" className="registerbtn">Register</button>
                </div>
            </form>
        </>
    )
}

export default Register