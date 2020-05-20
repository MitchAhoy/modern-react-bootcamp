import React, { useState } from 'react';
import './Todo.css';

function Todo(props) {

    const [todoInfo, setTodoInfo] = useState(props.task)
    const [isEditing, setIsEditing] = useState(false)


    const handleEdit = evt => {
        setIsEditing(!isEditing)
    }

    const handleRemove = evt => {
        props.removeTodo(props.id)
    }

    const handleTaskEdit = evt => {
        evt.preventDefault()
        props.editTodo(todoInfo, props.id)
        setIsEditing(!isEditing)
    }

    const handleChangeEdit = evt => {
        setTodoInfo([evt.target.name] = evt.target.value)
    }

    const handleComplete = () => {

    }


    let result;
    if (isEditing) {
        result = (
        <div>
            <form onSubmit={handleTaskEdit} className="Todo-flex">
                <input 
                type="text"
                value={todoInfo}
                onChange={handleChangeEdit}
                name="todo"
                ></input>
                <button className="Todo-isEditingButton">✔️</button>
            </form>
        </div>
        )
    } else {
        result = (
        <div className={`Todo-flex` }>
            

            <span className="Todo-name">{props.task}</span>


            <div>
                <span className="Todo-edit Todo-modify" onClick={handleEdit} >Edit</span>
                <span className="Todo-delete Todo-modify" onClick={handleRemove}>Delete</span>
                <span className="Todo-complete Todo-modify" onClick={handleComplete}>✔</span>
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