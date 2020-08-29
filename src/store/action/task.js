import axios from '../../db/axios';
import { SET_TASK, GET_TASK } from './actionTypes';

export const setTask = (tasks) => {
    return {
        type: SET_TASK,
        tasks
    }
}

export const getTask = (id) => {
    return {
        type: GET_TASK,
        id
    }
}

export const initTask = () => {
    return async dispatch => {
        const { data, status } = await axios.get('/efishery_task/_all_docs');
        // console.log(data);
        if (status===200) {
            let { rows } = data;
            for (let i = 0; i < rows.length; i++) {
                console.log(rows[i]);
                const result = await axios.get(`/efishery_task/${rows[i].id}`);
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