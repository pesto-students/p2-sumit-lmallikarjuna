import React, { useState } from "react";

function AddTodo({ addToList }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState({ status: false });

  function handleTitleChange(e) {
    setTitle(e.target.value);
    if (e.target.value !== "" && error.status) setError({ status: false });
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
    if (e.target.value !== "" && error.status) setError({ status: false });
  }

  function handleAddTodo() {
    if (title === "" && description === "") {
      setError({ status: true, message: "Fields should not be empty" });
    } else if (title === "") {
      setError({ status: true, message: "Title should not be empty" });
    } else if (description === "") {
      setError({ status: true, message: "Description should not be empty" });
    } else addToList(title, description);
  }

  return (
    <div>
      <h1>Add new todos</h1>
      <input
        type="text"
        value={title}
        placeholder="Todo title"
        onChange={handleTitleChange}
      />
      <textarea
        type="text"
        value={description}
        placeholder="Todo description"
        onChange={handleDescriptionChange}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {error.status ? <p>{error.message}</p> : null}
    </div>
  );
}

export default AddTodo;
