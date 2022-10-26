import React, { useState } from 'react';
import TodoTable from '../TodoTable';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';


export default function TodoList() {
    const [newTodo, setNewTodo] = useState({ desc: '', date: '', priority: 'low' });
    const [todos, setTodos] = useState([]);


    const inputChanged = (event, type) => {
        if (type === 'description') {
            setNewTodo({ ...newTodo, desc: event.target.value })
        }

        if (type === 'date') {
            setNewTodo({ ...newTodo, date: event.toISOString() })
            
        }

        if (type === 'priority') {
            setNewTodo({ ...newTodo, priority: event.target.value })
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
                <span className="input-group-text">Date, task and priority</span>


                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker
                        label="Date"
                        value={newTodo.date}
                        onChange={(event) => {
                            inputChanged(event, "date");
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <input className="form-control" type="text" onChange={(event) => inputChanged(event, "description")} value={newTodo.desc} />
                <select value={newTodo.priority} onChange={(event) => inputChanged(event, "priority")}>
                    <option disabled defaultValue>Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            <Button onClick={addTodo} variant="contained">Add a new task</Button>

            <TodoTable deleteRow={deleteTodo} todos={todos} />

        </div>

    );
};