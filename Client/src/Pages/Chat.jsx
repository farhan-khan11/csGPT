import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import BoltStyleChat from '../components/animatedChat';

const backendUrl = import.meta.env.VITE_BACKEND_PORT

const Chat = () => {

    const navigate = useNavigate()

    const token = localStorage.getItem("token");

    const userId = localStorage.getItem("userId");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        navigate("/");
    };


    const [aiReply, setAiReply] = useState("")


    const onSubmitHandler = async (msg) => {
        try {
            const { data } = await axios.post('/chat', { prompt: msg }, {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token,
                },
            }
            );
            console.log("data : ", data);
            console.log("msg < == > : ", msg);
            console.log("AI_Response : ", data.AI_Reply)
            setAiReply(data.AI_Reply)
            return data.AI_Reply

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
        <BoltStyleChat
            onSend={onSubmitHandler}
            onLogout={handleLogout}
        />
    )

}

export default Chat