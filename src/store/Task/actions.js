export const CHARGE_TASK = 'CHARGE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const PRIOR_TASK = 'PRIOR_TASK';
export const MINOR_TASK = 'MINOR_TASK';

export const chargeTask = task => ({
    type: CHARGE_TASK,
    payload: task
})

export const completeTask = task => ({
    type: COMPLETE_TASK,
    payload: task
})

export const priorTask = task => ({
    type: PRIOR_TASK,
    payload: task
})

export const minorTask = task => ({
    type: MINOR_TASK,
    payload: task
})

