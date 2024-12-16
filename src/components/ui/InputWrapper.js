import React, { useState } from 'react';
import InputBox from './InputBox';
import SearchBox from './SearchBox';
import { MODE_SEARCH, MODE_CREATE } from '../../services/mode';

export default function InputWrapper(props) {
    const { mode, addNew, query, setSearchQuery } = props;
    const [priority, setPriority] = useState('Medium'); // Default priority for new tasks
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value); // Update input value
    };

    const handleKeyUp = (e) => {
        if (e.key === 'Enter' && value.trim() !== '') {
            // Create a new task with the selected priority
            const newTask = {
                id: Date.now(),  // Generate a unique ID based on timestamp
                text: value,
                priority: priority,  // Use the selected priority
                completed: false,
            };

            addNew(newTask);  // Pass the new task to the parent component
            setValue('');  // Clear the input after adding task
        }
    };

    switch (mode) {
        case MODE_CREATE:
            return <InputBox {...{ addNew, priority, setPriority, value, handleChange, handleKeyUp }} />;

        case MODE_SEARCH:
            return <SearchBox {...{ query, setSearchQuery }} />;

        default:
            return null;
    }
}
