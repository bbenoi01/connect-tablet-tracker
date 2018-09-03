import { types } from './checkoutActions';

const INITIAL_STATE = {
    historyItems: [],
    employees: [],
    devices: []
};

export default function CheckoutReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case (types.ALL_HISTORY_ITEMS): {
            return {
                ...state,
                historyItems: payload.reverse()
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

        case (types.ADD_NEW_HISTORY_ITEM): {
            return {
                ...state,
                name: payload.name,
                device: payload.device,
                timestamp: payload.timestamp,
                date: payload.date,
                time: payload.time
            }
        }

        default: return state;
    }
};