import { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState(["Sample Todo"]);
  let [newTodo, setNewTodo] = useState(" ");

  let addNewTask = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  let updaetTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <input
        placeholder="Add a task"
        value={newTodo}
        onChange={updaetTodoValue}
      ></input>
      <button onClick={addNewTask}> Add Task </button>
      <br /> <br /> <br /> <br />{" "}
      {/*   ye line space dene ke liye use hoti hai  */}
      <hr /> {/*   ye line break ke liye use hoti hai  */}
      <h4>Todo List</h4>
      <ul>
        {todos.map((todo) => {
          return <li> {todo}</li>;
        })}
      </ul>
    </div>
  );
}
