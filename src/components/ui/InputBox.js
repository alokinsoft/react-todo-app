import React from 'react';
import enhance from '../hoc/wrapInputBox';

function InputBox(props) {
    const { value, handleChange, handleKeyUp, setPriority, priority, setDueDate, dueDate } = props;

    // Handle priority change
    const handlePriorityChange = (e) => {
        setPriority(e.target.value); // Update priority selection
    };

    // Handle due date change
    const handleDueDateChange = (e) => {
        setDueDate(e.target.value); // Update due date selection
    };

    // Inline styles
    const inputStyle = {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box'
    };

    const selectStyle = {
        padding: '5px 10px',
        fontSize: '16px',
        marginLeft: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f9f9f9',
    };

    const dateStyle = {
        padding: '5px 10px',
        fontSize: '16px',
        marginLeft: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f9f9f9',
    };

    const prioritySelectorStyle = {
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px'
    };

    const labelStyle = {
        fontSize: '16px',
        marginRight: '10px'
    };

    return (
        <div>
            <input
                autoFocus
                type="text"
                className="form-control add-todo"
                value={value}
                onKeyUp={handleKeyUp}
                onChange={handleChange}
                placeholder="Add New Task"
                style={inputStyle}
            />

            {/* Priority Selector */}
            <div style={prioritySelectorStyle}>
                <label style={labelStyle}>Priority:</label>
                <select value={priority} onChange={handlePriorityChange} style={selectStyle}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>

            {/* Display selected priority */}
            {priority && (
                <div style={{ marginTop: '10px', fontSize: '16px', color: '#333' }}>
                    <strong>Selected Priority: </strong>{priority}
                </div>
            )}

            {/* Due Date Selector */}
            <div style={prioritySelectorStyle}>
                <label style={labelStyle}>Due Date:</label>
                <input
                    type="date"
                    value={dueDate}
                    onChange={handleDueDateChange}
                    style={dateStyle}
                />
            </div>
        </div>
    );
}

export default enhance(InputBox);
