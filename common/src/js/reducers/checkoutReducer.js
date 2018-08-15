import { types } from '../actions/checkoutActions';

const INITIAL_STATE = {
    name: '',
    device: ''
};

export default function CheckoutReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;

    var timestamp = Date.now();
    var nd = new Date(timestamp);
    var month = nd.getMonth() + 1;
    var day = nd.getDate();
    var year = nd.getFullYear();
    var date = month + '/' + day + '/' + year;

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
                device: payload,
                date: date
            }
        }

        case (types.ADD_HISTORY_ITEM): {
            return {
                ...state,
                name: payload.name,
                device: payload.device
            }
        }
        default: return state;
    }

};