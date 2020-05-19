import React, {useState} from 'react';
import './TodoList.css';
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import uuid from 'uuid/v4'

function TodoList() {

    const [todos, setTodos] = useState([{task: 'clean house', completed: false, id: uuid(), editMode: false}, {task: 'study', completed: false, id: uuid(), editMode: false}])

    const editTodo = id => {
        const textToEdit = todos.filter(todo => todo.id === id)
        console.log(textToEdit)
    }

    const removeTodo = id => {
        const idxToRemove = todos.indexOf(todo => todo.id === id)
        console.log(idxToRemove)
    }

    const todoList = todos.map(task => <Todo task={task.task} editTodo={editTodo} removeTodo={removeTodo} id={task.id} key={task.id}/>)

    const addTodo = newTodo => {
        setTodos([...todos, {task: newTodo, completed: false, id: uuid(), editMode: false}])
    }



  return (
    <div className="TodoList">
        <h1>Todo List</h1>
        <p>A Simple React Todo List App</p>

        <div>{todoList}</div>

        <NewTodoForm addTodo={addTodo}/>

    </div>
  );
}

export default TodoList;