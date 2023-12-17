import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../store/todo/todoSlice";

const CompletedTodo = () => {
  const completedTodos = useSelector((state) =>
    state.todos.items.filter((todo) => todo.completed)
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Completed Todos</h1>
      <div>
        {completedTodos.map((todo) => (
          <div key={todo.id}>
            <span style={{ textDecoration: "line-through" }}>{todo.text}</span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedTodo;
