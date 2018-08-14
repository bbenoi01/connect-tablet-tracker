import { types } from '../actions/checkoutActions';

const INITIAL_STATE = {
    name: '',
    device: ''
};

export default function CheckoutReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case (types.UPDATE_WHO): {
            return {
                ...state,
                name: payload
            }
        }

        case (types.UPDATE_WHAT): {
            return {
                ...state,
                device: payload
            }
        }

        case (types.ADD_HISTORY_ITEM): {
            return {
                ...state,
                historyItem: payload
            }
        }
        default: return state;
    }

};