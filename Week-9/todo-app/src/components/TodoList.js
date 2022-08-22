import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import Modal from "./Modal";

function TodoList() {
  const [list, setList] = useState([]);
  const [openTodo, setOpenTodo] = useState(null);

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
    console.log("handleOnComplete");
    setList((list) =>
      list.map((todo) => {
        if (todo.id === id) return { ...todo, isPending: false };
        return todo;
      })
    );
    setOpenTodo(null);
  }

  function openModal(id) {
    console.log("asodifhasodihas;odidhiffas;odihi");
    const item = list.find((item) => item.id === id);
    setOpenTodo(item);
  }

  return (
    <div>
      <ul>
        <h1>Your todo list</h1>
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
      </ul>
      <AddTodo addToList={addToList} />
      {openTodo && (
        <Modal>
          <h2>{openTodo.title}</h2>
          <p>{openTodo.description}</p>
          <button onClick={() => handleOnComplete(openTodo.id)}>✅</button>
        </Modal>
      )}
    </div>
  );
}

export default TodoList;
