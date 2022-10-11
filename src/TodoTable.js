import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default function TodoTable(props) {
    const [columnDefs] = useState([
        { field: 'desc', sortable: true, filter: true },
        { field: 'date', sortable: true, filter: true },
        {
            field: 'priority', sortable: true, filter: true,
            cellStyle: params => params.value === "high" ? { color: 'red' } : { color: 'black' }
        }
    ])
    const gridRef = useRef();

    const _deleteRow = () => {
        if (gridRef.current.getSelectedNodes()[0]) {
            props.deleteRow(gridRef.current.getSelectedNodes()[0].childIndex)
        }
        else {
            alert('Select row first');
        }
    }

    if (props.todos.length === 0) {
        return (
            <div style={{ marginTop: 100 }}>
                Nothing to do for now. Add new tasks!!
            </div>
        )
    } else {
        return (

            <div className="ag-theme-alpine" style={{ height: '700px', width: '50%', margin: 'auto' }} >
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowSelection="single"
                    columnDefs={columnDefs}
                    rowData={props.todos}>
                </AgGridReact>
                <button onClick={() => _deleteRow()}>Delete</button>
            </div >

        );
    }

}
