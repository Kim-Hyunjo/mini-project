import React from "react";
import Modal from "./modal";
import { useState } from "react";
import "./Question.css";
import "./Login.css";

const Question = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const onClickNext = () => {
    window.location.href = "/Board";
  };

  const dragList = () => {
    window.location.href = "/Board";
  };

  const deleteQuestion = (e) => {
    document.getElementById("1").style.animation =
      "slide-out-bck-left 1.4s infinite";
    setTimeout(() => deletion(), 300);
  };

  const deletion = () => {
    document.getElementById("1").remove();
    document.getElementById("question_list").style.animation =
      "fade-in-bottom 1s";
  };

  return (
    <div>
      <React.Fragment>
        <Modal
          open={modalOpen}
          close={closeModal}
          header="질문을 입력해주세요."
        >
          <main> {props.children} </main>
          <input id="Answer"></input>
        </Modal>
      </React.Fragment>

      <div class="question_list" id="question_list">
        <h4 onDragStart={dragList} id="1">
          질문 리스트
          <button class="del_button" onClick={deleteQuestion}>
            X
          </button>
        </h4>
        <h4 onClick={openModal}>질문 리스트</h4>
        <h4 onClick={openModal}>질문 리스트</h4>
        <h4 onClick={openModal}>질문 리스트</h4>
        <h4 onClick={openModal}>질문 리스트</h4>
        <h4 onClick={openModal}>질문 리스트</h4>
      </div>
      <div>
        <button class="add_button" onClick={onClickNext}>
          My Board
        </button>
      </div>
    </div>
  );
};

export default Question;
