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
        const { data, status } = await db.get('/efishery_task/_all_docs');
        if (status===200) {
            let { rows } = data;
            for (let i = 0; i < rows.length; i++) {
                const result = await db.get(`/efishery_task/${rows[i].id}`);
                const { name, description, completed, tags, createdAt } = result.data;
                rows[i] = {
                    ...rows[i],
                    name,
                    description,
                    completed,
                    tags,
                    createdAt
                };
            }
            dispatch(setTask(rows));
        }
    }
}