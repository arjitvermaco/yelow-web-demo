import React, { useState } from "react";
import Modal from "react-modal";
import ModalHeader from "./ModalHeader";
import PaymentOptions from "./PaymentOptions";
import UserInfo from "./UserInfo";

Modal.defaultStyles.overlay.backgroundColor = "rgba(245, 213, 39, 0.41)";
export default function PaymentModal() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="">
      <button onClick={openModal} className="bg-my-yellow px-4 py-2 rounded-lg shadow">Pay With Yelow</button>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        className="bg-white rounded-lg py-6 shadow-lg md:mt-12  my-auto m-auto w-full h-full md:h-auto md:max-w-sm animate__animated animate__slideInDown animate__slideInDown"
      >
        <button className="float-right mr-2 mb-2" onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <ModalHeader />
        <UserInfo />
        <PaymentOptions />
      </Modal>
    </div>
  );
}
