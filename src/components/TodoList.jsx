import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../store/todo/todoSlice";
import CompletedTodo from "./CompletedTodo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <CompletedTodo />
    </div>
  );
};

export default TodoList;
