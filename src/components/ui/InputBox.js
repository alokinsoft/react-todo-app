import React from 'react';
import enhance from '../hoc/wrapInputBox';

function InputBox(props) {
    const { value, handleChange, handleKeyUp, priority, setPriority } = props;

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
            />
            <div className="priority-selection">
                <label>Priority:</label>
                <select
                    value={priority}  // Ensure the selected priority is passed to the dropdown
                    onChange={(e) => setPriority(e.target.value)}  // Update priority state
                    className="form-control"
                >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
        </div>
    );
}

export default enhance(InputBox);
