import { SET_TASK } from '../action/actionTypes';

const initialState = {
    tasks: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK:
            return {
                ...state,
                tasks: action.tasks
            }
        default:
            return state;
    }
}

export default reducer;