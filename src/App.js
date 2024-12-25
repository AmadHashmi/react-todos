import "./App.css";
import TodoRowItem from "./components/TodoRowItem";

function App() {
  const todos = [
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User one" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User two" },
    { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User one" },
  ];
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your todos</div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Assigned</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <TodoRowItem
                  rowNumber={todo.rowNumber}
                  rowDescription={todo.rowDescription}
                  rowAssigned={todo.rowAssigned}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
