import { types } from './addDevicesActions';

const INITIAL_STATE = {
    OS: '',
    model: ''
};

export default function AddDevicesReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case (types.UPDATE_OS): {
            return {
                ...state,
                OS: payload
            };
        }

        case (types.UPDATE_MODEL): {
            return {
                ...state,
                model: payload
            };
        }

        case (types.NEW_DEVICE): {
            return {
                ...state,
                OS: payload.OS,
                model: payload.model
            };
        }
        
        default: return state;
    }
};