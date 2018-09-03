import { types } from './historyActions';

const INITIAL_STATE = {
    historyItems: []
};

export default function HistoryReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    var timestamp = Date.now();
    var nd = new Date(timestamp);
    var month = nd.getMonth() + 1;
    var day = nd.getDate();
    var year = nd.getFullYear();
    var hrs = nd.getHours();
    var min = nd.getMinutes();
    var sec = nd.getSeconds();
    var date = month + '/' + day + '/' + year;

    if (hrs < 10) {
        hrs = '0' + hrs;
    }

    if (min < 10) {
        min = '0' + min;
    }

    if (sec < 10) {
        sec = '0' + sec;
    }

    var time = hrs + ':' + min + ':' + sec;

    switch (type) {
        case 'ADD_NEW_HISTORY_ITEM': {
            if (state.historyItems.length > 3) {
                return {
                    historyItems: [
                        ...state.historyItems.splice(
                            state.historyItems.length - 3,
                            state.historyItems.length
                        ),
                        {
                            name: payload.city,
                            device: payload.device,
                            timestamp: timestamp,
                            time: time,
                            date: date
                        }
                    ]
                };
            } else {
                return {
                    historyItems: [
                        ...state.historyItems,
                        {
                            name: payload.city,
                            device: payload.device,
                            timestamp: timestamp,
                            time: time,
                            date: date
                        }
                    ]
                };
            }
        }
        default: {
            return state;
        }
    }
};