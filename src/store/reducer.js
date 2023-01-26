import {CHARGE_TASK, COMPLETE_TASK, PRIOR_TASK} from './Task/actions.js'

export const taskReducer = (state = {}, action) => {
    switch(action.type){
        case CHARGE_TASK:
            if(!localStorage.getItem('task_' + action.payload.name)){
                localStorage.setItem('task_' + action.payload.name, JSON.stringify(action.payload));
                window.location.reload(false); 
            }else{
                if(document.querySelector('.labelAdd')){
                    document.querySelector('.labelAdd').innerHTML = 'Task Name already exists. Try another one.';
                    document.querySelector('.labelAdd').className = 'mt-2 text-danger labelAdd';
                }else{
                    const btnSubmit = document.querySelector('#btnSubmit');
                    const warning = document.createElement('h4');
                    warning.innerHTML = 'Task Name already exists. Try another one.';
                    warning.className = 'mt-2 text-danger labelAdd'
                    btnSubmit.appendChild(warning);
                }
            }
            return state;
        case COMPLETE_TASK:
            localStorage.removeItem('task_' + action.payload.taskName);
            window.location.reload(false); 
            return state;
        case PRIOR_TASK:
            let task = localStorage.getItem('task_' + action.payload.taskName);
            task = JSON.parse(task);
            const cardID = "card_" + task.name
            if(task.priority === 'C'){
                task.priority = 'B';
                localStorage.setItem('task_' + task.name, JSON.stringify(task));
                window.location.reload(false);
            }else if(task.priority === 'B'){
                task.priority = 'A';
                localStorage.setItem('task_' + task.name, JSON.stringify(task));
                window.location.reload(false);
            }else{
                const alertContainer = document.querySelector(`#${cardID}`)
                if(!document.querySelector(`.maxPrio_${cardID}`)){
                    const alert = document.createElement('p');
                    alert.classList = 'maxPrio_'+cardID;
                    alert.innerHTML = 'The task already has maximum priority.'
                    alertContainer.appendChild(alert);
                }
            }
            return state;
        default:
            return state;
    }
};