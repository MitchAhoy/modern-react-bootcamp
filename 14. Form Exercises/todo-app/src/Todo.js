import React from 'react';
import './Todo.css';

function Todo(props) {

    const handleEdit = evt => {
        props.editTodo(props.id)
        console.log(props.id)
    }

    const handleRemove = evt => {
        // props.removeTodo(props.id)
    }

  return (
    <div className="Todo">
        <div>
            <span className="Todo-name">{props.task}</span>
        </div>
        <div>
            <span className="Todo-edit Todo-modify" onClick={handleEdit} >Edit </span>
            <span className="Todo-delete Todo-modify" onClick={handleRemove}>X</span>
        </div>
    </div>
  );
}

export default Todo;