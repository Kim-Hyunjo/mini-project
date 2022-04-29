import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Login.css'

function Login(){
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('');

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const onClickLogin = () => {
        window.location.href = "/Create"
    }
    
    useEffect(() => {
        axios.get('/user_inform/login')
        .then(res => console.log(res))
        .catch()
    },
    [])
    
    return(
        <div>
            <div id="bg">
                <h1>hi</h1>
            </div>
            <div id="home">

            <button class="button" onClick={onClickLogin}>
                <div class="button__content">
                    <p class="button__text">PUSH</p>
                </div>
            </button>
            </div>
        </div>
    )
}


export default Login;