import { types } from './whoActions';

const INITIAL_STATE = {
    name: ''
};

export default function WhoReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    
    switch (type) {
        case (types.UPDATE_WHO): {
            return {
                ...state,
                name: payload
            }
        }
        default: return state;
    }
};