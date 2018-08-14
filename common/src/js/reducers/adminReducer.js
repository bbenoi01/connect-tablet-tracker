import { types } from '../actions/adminActions';

const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    OS: '',
    model: ''
};

export default function AdminReducer(state = INITIAL_STATE, action) {
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

        case (types.NEW_EMPLOYEE): {
            return {
                ...state,
                firstName: payload.firstName,
                lastName: payload.lastName
            };
        }

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