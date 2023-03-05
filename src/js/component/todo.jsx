import React from "react";

const Todo = ({ todo, handleRemoveTodo }) => {

  return (
    <div className="todoWrapper">
      <p>{todo.description}</p>
      <button onClick={() => handleRemoveTodo(todo.id)}>X</button>
    </div>
  )
}

export default Todo;