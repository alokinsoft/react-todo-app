import React from 'react';
import Info from './Info';
import Header from './Header';
import Footer from './Footer';
import { applyFilter, search, FILTER_ACTIVE } from '../../services/filter';
import TodoItem from './TodoItem';

export default function TodoList(props) {
    const { list, filter, mode, query } = props.data;
    const { addNew, changeFilter, changeStatus, changeMode, setSearchQuery } = props.actions;
    const activeItemCount = applyFilter(list, FILTER_ACTIVE).length;
    const items = search(applyFilter(list, filter), query);

    return (
        <div className="container">
            <div className="row">
                <div className="todolist">
                    {/* Header */}
                    <Header {...{ addNew, mode, query, setSearchQuery }} />

                    {/* Task List with Priority Display */}
                    {items.length > 0 ? (
                        <ul className="list-unstyled">
                            {items.map((task) => (
                                <TodoItem
                                    key={task.id}
                                    data={task}
                                    changeStatus={changeStatus}
                                />
                            ))}
                        </ul>
                    ) : (
                        <p>No tasks available</p>
                    )}

                    {/* Footer with Active Item Count */}
                    <Footer {...{ activeItemCount, filter, changeFilter, mode, changeMode }} />

                    {/* Info Section */}
                    <Info {...{ mode }} />
                </div>
            </div>
        </div>
    );
}
