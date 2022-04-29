import React from "react"
import Modal from './modal'
import { useState } from "react";
import './Question.css';
import './Login.css'
import './Shared.css'

const Shared = (props) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };

    return (
        <div>
            <React.Fragment>
            <Modal open={modalOpen} close={closeModal} header="답변을 입력해주세요.">
                <main> {props.children} </main>
                <input id="Answer"></input>
            </Modal>
            </React.Fragment>
            
            <h1>답변하고 싶은 질문을 골라주세요</h1>
            <div class="question_list" id="question_list">
                <h4 onClick={openModal}>질문 리스트</h4>
                <h4 onClick={openModal}>질문 리스트</h4>
                <h4 onClick={openModal}>질문 리스트</h4>
                <h4 onClick={openModal}>질문 리스트</h4>
                <h4 onClick={openModal}>질문 리스트</h4>
                <h4 onClick={openModal}>질문 리스트</h4>
            </div>
        </div>
    );
  }

export default Shared;