import React from "react";
import { useState } from "react";
import './Create.css'

const Create = (e) => {
    const [text, setText] = useState('');

    const onCheckEnter = (e) => {
        if(document.getElementById("name").value !== ''){
            document.getElementById("pwd").style.display = "block";
        }

        if(e.key=== 'Enter'){
            if(document.getElementById("name").value !== '' && document.getElementById("pwd").value !== ''){ 
                window.location.href = "/Question"
            }

            if(document.getElementById("name").value === ''){
                document.getElementById("name_label").innerHTML = "Please Enter Your Name! &#129321;";
            }

            else if(document.getElementById("pwd").value === ''){
                document.getElementById("name_label").innerHTML = "Please Enter Your Pwd! &#129321;";
                document.getElementById("name_label").visibility = 1;
            }

        }

    }

    const onClickLabel = (e) => {
        document.getElementById("name_label").innerHTML = "Press Enter &#129321;";
    }
    const loginAlert = (e) => {

    }

    return (
        <div>
            <div class="form__group" onKeyPress={onCheckEnter}>
                <input type="text" class="form__input" id="name" placeholder="Full name" required />
                <label for="name" class="form__label" id="name_label" onClick={onClickLabel}>Welcome :)</label>
                <input type="password" class="pwd__input" id="pwd" placeholder="Access Key" required />
            </div>
        </div>

    )
}

export default Create;