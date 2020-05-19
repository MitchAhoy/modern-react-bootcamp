import React, {useState} from 'react';
import './NewTodoForm.css';

function NewTodoForm(props) {


    const [newTodo, setNewTodo] = useState('')

    const handleChange = evt => {
        setNewTodo(evt.target.value)
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        props.addTodo(newTodo)
        setNewTodo('')
    }


  return (
    <div className="NewTodoForm">
        <form onSubmit={handleSubmit}>
            <label htmlFor="newTodo">New Todo</label>
            <input 
            className="NewTodoForm-input" 
            type="text"
            id="newTodo"
            name="newTodo"
            value={newTodo}
            onChange={handleChange}
            placeholder="Enter new todo!"
            ></input>
            <button>ADD TODO</button>
        </form>
    </div>
  );
}

export default NewTodoForm;