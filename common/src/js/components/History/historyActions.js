import axios from 'axios';

export const types = {
    ADD_NEW_HISTORY_ITEM: 'ADD_NEW_HISTORY_ITEM'
};

export function addNewHistoryItem(name, device) {
    return {
        type: types.ADD_NEW_HISTORY_ITEM,
        payload: axios.post('https://connect-tablet-tracker.herokuapp.com/api/historyItems', { name, device })
                    .then(res => {
                        dispatch(findHistoryItems())
                    })
                    .catch(err => alert('Error, checkout unsuccessful'))
    };
}