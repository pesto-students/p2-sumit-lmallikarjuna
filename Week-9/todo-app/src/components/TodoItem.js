import React from "react";
import { Button as AntButton } from "antd";

function TodoItem({ title, id, handleOnComplete, openModal }) {
  return (
    <li key={id}>
      <AntButton type="link" onClick={() => openModal(id)}>
        {title}
      </AntButton>
    </li>
  );
}

export default TodoItem;
