import { types } from '../actions/historyActions';

const INITIAL_STATE = {
    historyItems: []
};

export default function HistoryReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case (types.ADD_NEW_HISTORY_ITEM): {
            if(state.historyItems.length > 10) {
                return {
                    historyItems: [
                        ...state.historyItems.splice(
                            state.historyItems.length - 10,
                            state.historyItems.length
                        )
                    ]
                }
            } else {
                return {
                    historyItems: [
                        ...state.historyItems
                    ]
                }
            }
        }
        default: return state;
    }
};