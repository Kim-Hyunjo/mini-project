import React from 'react';
import './modal.css';

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  const onClickQuest = () => {
    window.location.href = "/Board"
    }

    const createQuestion = () => {
        document.getElementsById("question_list").appendChild("hi")

    };

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            <button className="close" onClick={createQuestion}>
              Add
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;