import React from 'react';
import CheckBox from './CheckBox';

// Define getPriorityClass function before using it
const getPriorityClass = (priority) => {
    switch (priority) {
        case 'High':
            return 'high-priority';
        case 'Medium':
            return 'medium-priority';
        case 'Low':
            return 'low-priority';
        default:
            return ''; // Default class
    }
};

export default function TodoItem(props) {
    const { data, changeStatus } = props;
    const priority = data.priority || 'Medium';  // Default to Medium if no priority is set

    const handleChange = (checked) => changeStatus(data.id, checked);

    const className = 'todo-item ui-state-default ' + (data.completed ? 'completed' : 'pending');
    const priorityClass = getPriorityClass(priority); // Get the priority class

    return (
        <li className={className}>
            <div className="checkbox">
                <label>
                    <CheckBox checked={data.completed} onChange={handleChange} />
                    {data.text}
                    {/* Display the priority */}
                    <span className={`priority ${priorityClass}`}>{priority}</span>
                </label>
            </div>
        </li>
    );
}

