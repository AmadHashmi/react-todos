import React from "react";
import { useState } from "react";
export const NewTodoForm: React.FC<{ addTodo: Function }> = (props) => {
  const [assigned, setAssigned] = useState("");
  const [description, setDescription] = useState("");

  const addTodoHandler = () => {
    if (description !== "" && assigned !== "") {
      props.addTodo(assigned, description);
      setAssigned("");
      setDescription("");
    }
  };
  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            value={assigned}
            type="text"
            className="form-control"
            required
            onChange={(e) => setAssigned(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={3}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button
          onClick={addTodoHandler}
          type="button"
          className="btn btn-primary mt-3"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};
