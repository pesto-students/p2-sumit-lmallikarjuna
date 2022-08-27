import React from "react";
import ReactDOM from "react-dom";
import { Modal as AntModal } from "antd";

function Modal({ children }) {
  // return ReactDOM.createPortal(
  //   children,
  //   document.getElementById("modal-root")
  // );
  return <AntModal>{children}</AntModal>
}

export default Modal;
