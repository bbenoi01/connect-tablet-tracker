import { types } from './addRepsActions';

const INITIAL_STATE = {
    firstName: '',
    lastName: '',
};

export default function AddRepsReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {

        case (types.UPDATE_FIRST_NAME): {
            return {
                ...state,
                firstName: payload
            }
        }

        case (types.UPDATE_LAST_NAME): {
            return {
                ...state,
                lastName: payload
            }
        }
        default: return state;
    }
};