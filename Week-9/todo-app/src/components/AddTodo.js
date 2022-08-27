import React, { useState } from "react";
import { Button as AntButton, Input as AntInput, Form as AntForm } from "antd";

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
    setTitle("");
    setDescription("");
  }

  return (
    <AntForm>
      <h1>Add new todos</h1>
      <AntForm.Item required colon={false} label="Title" name="title">
        <AntInput
          type="text"
          value={title}
          placeholder="Todo title"
          status={error.status ? "warning" : "success"}
          error="adf"
          onChange={handleTitleChange}
        />
      </AntForm.Item>
      <AntForm.Item
        required
        colon={false}
        label="Description"
        name="description"
      >
        <AntInput.TextArea
          type="text"
          value={description}
          placeholder="Todo description"
          status={error.status ? "warning" : "success"}
          onChange={handleDescriptionChange}
        />
      </AntForm.Item>
      <AntButton type="primary" block onClick={handleAddTodo}>
        🚀 Add Todo 🚀
      </AntButton>
      {error.status ? <p>{error.message}</p> : null}
    </AntForm>
  );
}

export default AddTodo;
