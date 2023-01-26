import React from 'react';
import { store } from '../store/store';

const NewTask = () => {
    
    const addTask = (event) => {
        event.preventDefault();
        const {target} = event;
        const name = target.taskName.value;
        const description = target.taskDescription.value;
        const priority = target.taskPriority.value;
        let task = {
            name,
            description,
            priority 
        }
        target.taskName.value = '';
        target.taskDescription.value = '';
        target.taskPriority.value = '';
        
        store.dispatch({
            type: 'CHARGE_TASK',
            payload: task
        })
    }
    
    return (
        <div class = 'container mt-3'>
            <form onSubmit={addTask}>
                <div class="mb-3">
                    <label for="taskName" class="form-label"><h5>Task Name:</h5></label>
                    <input type="text" class="form-control" id="taskName" name='taskName' placeholder="..." required/>
                </div>
                <div class="mb-3">
                    <label for="taskDescription" class="form-label"><h5>Task Description</h5></label>
                    <textarea class="form-control" id="taskDescription" name='taskDescription' rows="13" required></textarea>
                </div>
                <div class="mb-3">
                    <label for="prioritySelector" class="form-label"><h5>Priority</h5></label>
                    <select class="form-select" aria-label="Default select example" name='taskPriority' id='prioritySelector' required>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                </div>
                <div class="mb-3" id='btnSubmit'>
                    <button class="btn btn-dark" type="submit">Add Task</button>
                </div>
            </form>
        </div>
    );
}

export default NewTask;
