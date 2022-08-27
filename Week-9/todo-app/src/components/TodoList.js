import React, { useState } from "react";
import { List as AntList, Modal as AntModal, Button as AntButton} from "antd";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import Modal from "./Modal";

function TodoList() {
  const [list, setList] = useState([]);
  const [openTodo, setOpenTodo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addToList(title, description) {
    setList((list) => [
      ...list,
      {
        title,
        description,
        isPending: true,
        id: uuidv4(),
      },
    ]);
  }

  function handleOnComplete(id) {
    setList((list) => list.filter((todo) => todo.id !== id));
    setOpenTodo(null);
  }

  function openModal(id) {
    const item = list.find((item) => item.id === id);
    setOpenTodo(item);
    setIsModalOpen(true);
  }

  function handleOk() {
    handleOnComplete(openTodo.id);

    setIsModalOpen(false);
  }

  function handleCancel() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <AddTodo addToList={addToList} />
      <AntList>
        {list.length > 0 ? <h1>Your todo list</h1> : null}
        {list.map(({ title, description, isPending, id }) => (
          <TodoItem
            id={id}
            key={id}
            title={title}
            description={description}
            isPending={isPending}
            handleOnComplete={handleOnComplete}
            openModal={openModal}
          />
        ))}
      </AntList>
      {openTodo && (
        <AntModal
          title={openTodo.title}
          visible={isModalOpen}
          onCancel={handleCancel}
          footer={[<AntButton type="primary" onClick={handleOk}>Completed ✅</AntButton>]}
        >
          <p>{openTodo.description}</p>
        </AntModal>
      )}
    </div>
  );
}

export default TodoList;
