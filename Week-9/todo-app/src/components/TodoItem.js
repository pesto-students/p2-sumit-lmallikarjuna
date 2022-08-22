import React from "react";

function TodoItem({
  title,
  id,
  handleOnComplete,
  openModal,
}) {
  return (
    <li onClick={() => openModal(id)}>
      <h2>{title}</h2>
      <button onClick={() => handleOnComplete(id)}>✅</button>
    </li>
  );
}

export default TodoItem;
