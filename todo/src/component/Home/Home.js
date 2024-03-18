import React, { useState } from 'react';
import TodoList from '../TodoList/todoList'; // Adjust the path based on your file structure
import TodoForm from '../TodoForm/todoForm';

function Home(){

    // Define state for todos
    const [todos, setTodos] = useState([]);

    // Function to handle toggling todo completion
    const handleToggle = (id) => {
        setTodos(prevTodos => 
            prevTodos.map(todo => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // Function to handle deleting a todo
    const handleDelete = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    // Function to handle adding a new todo
    const handleAdd = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };
   
    return(
        <div>
            <h1>Todo List</h1>
           
            <TodoForm onAdd={handleAdd} /> 
            <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} onAdd={handleAdd} />
        </div>
    );
}

export default Home;

