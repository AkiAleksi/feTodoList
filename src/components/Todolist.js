import React, { useState } from 'react';
import TodoTable from '../TodoTable';

export default function TodoList() {
    const [newTodo, setNewTodo] = useState({ desc: '', date: '', priority: 'low' });
    const [todos, setTodos] = useState([]);
    

    const inputChanged = (event, type) => {
        if (type === 'description') {
            setNewTodo({ ...newTodo, desc: event.target.value })
        }

        if (type === 'date') {
            setNewTodo({ ...newTodo, date: event.target.value })
        }

        if (type === 'priority') {
            setNewTodo({...newTodo, priority: event.target.value})
        }
    }

    const addTodo = (event) => {
        setTodos([...todos, newTodo]);
    }

    const deleteTodo = (deleteidx) => {
        setTodos(todos.filter((todo, index) =>      
        index !== deleteidx))
       
    }

    return (

        <div className="container">
            <h1>Simple Todolist</h1>
            <div className="input-group">
                <span className="input-group-text">Date and task</span>
                <input className="form-control" type="date" onChange={(event) => inputChanged(event, "date")} value={newTodo.date} />
                <input className="form-control" type="text" onChange={(event) => inputChanged(event, "description")} value={newTodo.desc} />
                <select value={newTodo.priority} onChange={(event) => inputChanged(event, "priority")}>
                    <option disabled defaultValue>Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            <button onClick={addTodo} type="button" className="btn btn-danger">Add a new task</button>
           
            <TodoTable deleteRow={deleteTodo} todos={todos} />
           
        </div>
    );
};