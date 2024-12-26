import React, { useState } from "react";
import "./App.css";
import { TodoTable } from "./components/TodoTable";
import { NewTodoForm } from "./components/NewTodoForm";

export const App: React.FC<{}> = () => {
  const [showForm, setShowForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User one" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User two" },
    { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User one" },
  ]);
  const addTodo = (assigned: string, description: string) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }

    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };

    setTodos((array) => [...array, newTodo]);
    setShowForm(false);
  };

  const deleteTodo = (deleteTodoRowNumber: Number) => {
    console.log(deleteTodoRowNumber);
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    console.log(filtered);
    setTodos(filtered);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };
  const hideFormHandler = () => {
    setShowForm(false);
  };
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your todos</div>
        <div className="card-body">
          {!showForm && <TodoTable todos={todos} deleteTodo={deleteTodo} />}
          {!showForm && (
            <button className="btn btn-info" onClick={showFormHandler}>
              Add new todo
            </button>
          )}
          {showForm && (
            <button className="btn btn-success" onClick={hideFormHandler}>
              Show List
            </button>
          )}

          {showForm && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
};
