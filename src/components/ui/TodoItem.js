import React from 'react';
import CheckBox from './CheckBox';

export default function TodoItem(props) {
    const { data, changeStatus } = props;

    const handleChange = (checked) => changeStatus(data.id, checked);

    // Determine the CSS class based on the task's completion status
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');

    // Convert the due date to a proper date format
    const dueDateFormatted = data.dueDate ? new Date(data.dueDate).toLocaleDateString() : null;

    return (
        <li className={className}>
            <div className={CheckBox.text}>
                <label>
                    <CheckBox
                        checked={data.completed} 
                        onChange={handleChange} 
                        style={{ transform: 'scale(1.5)', marginRight: '10px' }} 
                    />
                    <br />
                    <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
                        {data.text}
                    </span>
                </label>
            </div>

            {/* Display the priority next to the task */}
            <span
                className={`priority priority-${data.priority ? data.priority.toLowerCase() : ''}`}
                style={{
                    marginLeft: '10px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#333',
                }}
            >
                {data.priority}
            </span>

            {/* Display the due date */}
            {dueDateFormatted && (
                <span
                    style={{
                        marginLeft: '10px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#888',  // Different color for due date
                    }}
                >
                    Due: {dueDateFormatted}
                </span>
            )}
        </li>
    );
}
