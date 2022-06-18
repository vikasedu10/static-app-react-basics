import React, { useState } from "react";

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Title or Description cannot be blank.")
        } else {
            props.addTodo(title, description);
        }
        setTitle("")
        setDescription("")
    }

  return (
    <div className="container col-sm-4 col-md-4 pb-3 my-3">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title for TODO
          </label>
          <input
            type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Give meaningful title
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}}
            className="form-control"
            id="description"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-primary">
          Add to task
        </button>
      </form>
    </div>
  );
};
