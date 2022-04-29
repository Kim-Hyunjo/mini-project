import React from "react";
import { useState } from "react";
import './Board.css'

const Board = (props) => {
    const [text, setText] = useState('')


    const onChange = (e) => {

    }

    const onClickLeft = (e) => {
        if(document.getElementById("default_message").style.display != "none"){
            document.getElementById("default_message").style.display = "none";
        }
        
        document.getElementById("real_message").style.animation = "fade-in-right 1s";
        setText('따뜻한 인상이에요');
    }

    const onClickRight = (e) => {
        if(document.getElementById("default_message").style.display != "none"){
            document.getElementById("default_message").style.display = "none";
        }
        
        document.getElementById("real_message").style.animation = "fade-in-right 1s";
        setText('똑똑해 보여요');
    }

    return (
        <div>
            <div class ="message">
                <h1>제 첫인상은 어때요</h1>
                <p id="default_message">따뜻한 인상이에요</p>
                <p id="real_message">{text}</p>
                <input />

            </div>
            <div>
                <a href="#" class="arrow left" onClick = {onClickLeft}></a>
                <a href="#" class="arrow right" onClick = {onClickRight}></a>
            </div>
        </div>

    )
}
export default Board;