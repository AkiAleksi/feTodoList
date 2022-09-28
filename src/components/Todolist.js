import React, { useState } from 'react';
import TodoTable from '../TodoTable';

export default function TodoList() {
    const [newTodo, setNewTodo] = useState({ desc: '', date: '' });
    const [todos, setTodos] = useState([]);

    const inputChanged = (event, type) => {
        if(type === 'description') {
            setNewTodo( {...newTodo, desc: event.target.value })
        }

        if(type === 'date') {
            setNewTodo( {...newTodo, date: event.target.value})
        }
    }

    const addTodo = (event) => {
        // Vscode testaus push
        setTodos([...todos, newTodo]);
    }

    return (
        <div className="container">
            <input type="text" onChange={ (event) => inputChanged(event, "description")} value={newTodo.desc} />
            <input type="date" onChange={ (event) => inputChanged(event, "date")} value={newTodo.date} />
            <button onClick={addTodo}>Add</button>
            <TodoTable todos={todos} />
        </div>
    );
};