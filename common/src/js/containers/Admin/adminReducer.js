import { types } from './adminActions';

const INITIAL_STATE = {
    employees: [],
    devices: []
};

export default function AdminReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {

        case (types.ALL_EMPLOYEES): {
            return {
                ...state,
                employees: payload
            };
        }

        case (types.ALL_DEVICES): {
            return {
                ...state,
                devices: payload
            }
        }
        default: return state;
    }
};