import React from 'react';
import Task from './task';

const AllTasks = () => {

    const keys = Object.keys(localStorage);

    return (
        <div class = 'container mt-4 mb-4 h-50' id='tasksContainer'>
            <Task keys = {keys}></Task>
        </div>
    );
}

export default AllTasks;
