import React, { useState } from 'react';
import './Todo.css';

function Todo(props) {

    const [isEditing, setIsEditing] = useState(false)

    const handleEdit = evt => {
        setIsEditing(!isEditing)
        
        
    }

    const handleRemove = evt => {
        props.removeTodo(props.id)
    }

    const handleTaskEdit = evt => {
        evt.preventDefault()
        props.editTodo(props.id)
        setIsEditing(!isEditing)
    }


    let result;
    if (isEditing) {
        result = (
        <div>
            <form onSubmit={handleTaskEdit}>
                <input 
                type="text"
                value={props.task}
                onChange={handleChangeEdit}
                ></input>
                <button className="Todo-isEditingButton">✔️</button>
            </form>
        </div>
        )
    } else {
        result = (
        <div className="Todo-flex">
            <div>
                <span className="Todo-name">{props.task}</span>
            </div>
            <div>
                <span className="Todo-edit Todo-modify" onClick={handleEdit} >Edit </span>
                <span className="Todo-delete Todo-modify" onClick={handleRemove}>X</span>
            </div>
        </div>
        )
    }



  return (
    <div className="Todo">
        {result}
    </div>
  );
}

export default Todo;