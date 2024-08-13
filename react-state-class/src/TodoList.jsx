import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task:"sample" , id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let addNewTask = () => {
    console.log("task added");

    setTodos((tasks) => {
      return [...tasks, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };
  let deleteTodo = (id) => {
    // console.log("deleted");
    setTodos((prevVal) => todos.filter((prevVal) => prevVal.id !== id));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter tasks"
        value={newTodo}
        onChange={updateTodoValue}
      />{" "}
      <br />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <hr />
      <h3>Todo Tasks List:</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span> {todo.task}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
