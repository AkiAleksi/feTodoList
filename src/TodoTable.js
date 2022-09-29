import React from 'react';


export default function TodoTable(props) {

    if (props.todos.length === 0) {
        return (
            <div style={{ marginTop: 100 }}>
                Nothing to do for now. Add new tasks!!
            </div>
        )
    } else {
        return (

            <table className='table'>
                <thead>
                    <tr><th>Date</th>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.todos.map((todo, idx) => {
                            return <tr key={idx}><td>{todo.date}</td><td>{todo.desc}</td>
                                <td><button onClick={() => props.deleteRow(idx)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        );
    }


}