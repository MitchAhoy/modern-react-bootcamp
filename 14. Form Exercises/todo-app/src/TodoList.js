import React, {useState} from 'react';
import './TodoList.css';
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import uuid from 'uuid/v4'

function TodoList() {

    const [todos, setTodos] = useState([{task: 'clean house', completed: false, id: uuid(), editMode: false}, {task: 'study', completed: false, id: uuid(), editMode: false}])

    const editTodo = (editedTodo, id) => {
        const newTodos = [...todos]
        const idxToEdit = newTodos.findIndex(todo => todo.id === id)
        newTodos[idxToEdit].task = editedTodo
        setTodos(newTodos)
    }

    const removeTodo = id => {
        const idxToRemove = todos.findIndex(todo => todo.id === id)
        const newTodos = [...todos]
        newTodos.splice(idxToRemove, 1)
        setTodos(newTodos) 
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