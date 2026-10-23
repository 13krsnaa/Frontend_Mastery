import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "Sample-Todo", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState(" ");

  let addNewTask = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4() }]);
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
          return <li key={todo.id}> {todo.task}</li>;
        })}
      </ul>
    </div>
  );
}
