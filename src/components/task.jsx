import React from 'react';
import { store } from '../store/store';

const Task = (key) => {
    
    const keys = key.keys;

    function deleteTask(event){
        event.preventDefault();
        const {target} = event;
        const taskName = target.id;
        

        let task = {
            taskName,
        }

        store.dispatch({
            type: 'COMPLETE_TASK',
            payload: task
        })
    }

    function upgradeTask(event){
        event.preventDefault();
        const {target} = event;
        const taskName = target.id;
        

        let task = {
            taskName,
        }

        store.dispatch({
            type: 'PRIOR_TASK',
            payload: task
        })
    }

    function checkColor(priority){
        switch(priority){
            case 'A':
                return 'bg-danger bg-gradient';
            case 'B':
                return 'bg-info bg-gradient'; 
            case 'C':
                return 'bg-light bg-gradient';   
            default:
                return 'bg-white';
        }
    }

    return (
        <div>
            {
                keys.map(value => {
                    if(value.includes('task_')){
                        const task = JSON.parse(localStorage.getItem(value));
                        const name = task.name;
                        const description = task.description;
                        const priority = task.priority;
                        const color = checkColor(priority);
                        const cardClass = `card m-3 `+ color;
                        const idCard = "card_" + name;
                        return(
                            <div class={cardClass} id={idCard}>
                                <div class="card-body">
                                    <h5 class="card-title">{name}</h5>
                                    <p class="card-text">{description}</p>
                                    <p class="card-text">Priority: {priority}</p>
                                    <button type="button" class="btn btn-success m-1" id={name} onClick={deleteTask}>Task Completed</button>
                                    <button type="button" class="btn btn-warning m-1" id={name} onClick={upgradeTask}>Upgrade priority</button>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    );
}

export default Task;
