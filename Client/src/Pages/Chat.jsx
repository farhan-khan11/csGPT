import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const backendUrl = import.meta.env.VITE_BACKEND_PORT

const Chat = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem("token");

    const userId = localStorage.getItem("userId");

    const [promptData, setPromptData] = useState({ prompt: "", userId: "" });

    const [aiReply, setAiReply] = useState("")

    const onChangeHandler = (e) => {
        try {
            console.log(e.target.name, e.target.value);
            setPromptData({ ...promptData, [e.target.name]: e.target.value })
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            // const { data } = await axios.post(`http://localhost:5050/api/auth/register`, registerFormData);
            const { data } = await axios.post(`${backendUrl}/chat`, { prompt: promptData.prompt }, {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token,
                },
            }
            );
            // const { data } = await axios.post('/chat', { prompt: promptData.prompt }, {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'auth-token': token,
            //     },
            // }
            // );
            console.log("data : ", data);
            console.log("promptData.prompt : ", promptData.prompt);
            console.log("AI_Response : ", data.AI_Reply)
            setAiReply(data.AI_Reply)

        } catch (error) {
            console.log(error)
            if (error.response && error.response.status === 401) {
                alert("Session expired. Please login again!");
                localStorage.removeItem("token");
                localStorage.removeItem("userId");
                navigate('/login');
            } else {
                console.log(error);
            }
        }
    }
    return (
        <>
            <div>Chat Page</div>
            <form onSubmit={onSubmitHandler}>
                <div className="container">
                    <p>enter the below.</p>
                    <hr />

                    <label htmlFor="prompt">Prompt:</label>
                    <input
                        type="text"
                        placeholder="Enter the prompt"
                        name="prompt"
                        id="prompt"
                        onChange={onChangeHandler}
                        required
                    />

                    <div className="ai-response">
                        <h3>AI Response:</h3>
                        <p>{aiReply}</p>
                    </div>


                    {/* <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        placeholder="Enter Your Password"
                        name="password"
                        id="password"
                        onChange={onChangeHandler}
                        required
                    />
                    <hr /> */}

                    <button type="submit" className="registerbtn">generate</button>
                </div>
            </form>
        </>
    )
}

export default Chat