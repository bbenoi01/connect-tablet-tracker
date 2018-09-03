import axios from 'axios';

export const types = {
    ADD_NEW_HISTORY_ITEM: 'ADD_NEW_HISTORY_ITEM'
};

export function addNewHistoryItem(name, device) {
    return {
        type: types.ADD_NEW_HISTORY_ITEM,
        payload: axios.post('http://localhost:3000/api/historyItems', { name, device })
                    .then(res => {
                        dispatch(findHistoryItems())
                    })
                    .catch(err => alert('Error, checkout unsuccessful'))
    };
}

// export function addNewHistoryItem(name, device, date, time) {
//     return (dispatch) => {
//         axios.post('http://localhost:3000/api/historyItems', { name, device, date, time })
//         .then(res => {
//             dispatch(findHistoryItems())
//         })
//         .catch(err => alert('Error, checkout unsuccessful'))
//     }
// }