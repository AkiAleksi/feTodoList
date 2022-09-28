import React from 'react';

export default function TodoTable(props) {
    console.log(props)

    return (
    <table className='table'>
        <tbody>
            {
                props.todos.map((todo, idx) => {
                    return <tr key={idx}><td>{todo.date}</td><td>{todo.desc}</td></tr>
                })
            }
        </tbody>
    </table>
    );

}
