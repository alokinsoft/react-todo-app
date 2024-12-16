import update from 'immutability-helper';

/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
    return [
        {
            id: 1,
            text: 'Learn Javascript',
            completed: false,
            priority: 'High',
            dueDate: '2024-12-20'  // Add a due date to the task
        },
        {
            id: 2,
            text: 'Learn React',
            completed: false,
            priority: 'Medium',
            dueDate: '2024-12-25'  // Add a due date to the task
        },
        {
            id: 3,
            text: 'Build a React App',
            completed: false,
            priority: 'Low',
            dueDate: '2024-12-30'  // Add a due date to the task
        }
    ];
}

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items, itemId, completed, dueDate) {
    let index = items.findIndex(item => item.id === itemId);

    // Returns a new list of data with updated status and optional due date.
    return update(items, {
        [index]: {
            completed: { $set: completed },
            dueDate: dueDate ? { $set: dueDate } : { $set: items[index].dueDate }  // Only update due date if it's provided
        }
    });
}

/**
 * A counter to generate a unique id for a todo item.
 * Can remove this logic when the todo is created using backend/database logic.
 * @type {Number}
 */
let todoCounter = 1;

function getNextId() {
    return getAll().length + todoCounter++;
}

/**
 * Adds a new item on the list and returns the new updated list (immutable).
 *
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */
export function addToList(list, data) {
    let item = Object.assign({
        id: getNextId(),
        priority: data.priority || 'Low',  
        dueDate: data.dueDate || '12/4/2024'  
    }, data);

    return list.concat([item]);
}

/**
 * Update priority and due date of an existing task
 * @param {Array} items
 * @param {Number} itemId
 * @param {String} priority ('High', 'Medium', 'Low')
 * @param {String} dueDate ('YYYY-MM-DD')
 * @return {Array}
 */
export function updatePriority(items, itemId, priority, dueDate) {
    let index = items.findIndex(item => item.id === itemId);

    // Returns a new list of data with updated priority and due date.
    return update(items, {
        [index]: {
            priority: { $set: priority },
            dueDate: { $set: dueDate }  // Update the due date as well
        }
    });
}

/**
 * Sort tasks by due date (ascending or descending)
 * @param {Array} items
 * @param {Boolean} ascending
 * @return {Array}
 */
export function sortByDueDate(items, ascending = true) {
    return [...items].sort((a, b) => {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);
        
        // Ascending order: dateA - dateB; Descending order: dateB - dateA
        return ascending ? dateA - dateB : dateB - dateA;
    });
}

/**
 * Sort tasks by priority (High > Medium > Low)
 * @param {Array} items
 * @return {Array}
 */
export function sortByPriority(items) {
    const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
    
    return [...items].sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
}
