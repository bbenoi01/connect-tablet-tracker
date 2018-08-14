import { types } from '../actions/appActions';

const INITIAL_STATE = {
    historyItems: [],
    employees: [],
    devices: []
};

export default function AppReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case (types.ALL_HISTORY_ITEMS): {
            return {
                ...state,
                historyItems: payload
            };
        }

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
            };
        }
        
        default: return state;
    }
};