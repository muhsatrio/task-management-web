import db from '../../db';
import { SET_TASK } from './actionTypes';

export const setTask = (tasks) => {
    return {
        type: SET_TASK,
        tasks
    }
}

export const initTask = () => {
    return async dispatch => {
        const response = await db.getAllDocuments('efishery_task');
        dispatch(setTask(response.data));
    }
}