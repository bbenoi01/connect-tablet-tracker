import axios from 'axios';

export const types = {
    UPDATE_WHO: 'UPDATE_WHO',
    UPDATE_WHAT: 'UPDATE_WHAT',
    ADD_HISTORY_ITEM: 'ADD_HISTORY_ITEM'
}

export function findHistoryItems() {
    return (dispatch) => {
        axios.get('https://connect-tablet-tracker.herokuapp.com/api/historyItems')
        .then(res => {
            dispatch({
                type: types.ALL_HISTORY_ITEMS,
                payload: res.data
            })
        })
        .catch(err => alert('Error, items not found'))
    };
}

export function updateEmployeeSelect(value) {
    return {
        type: types.UPDATE_WHO,
        payload: value
    };
}

export function updateDeviceSelect(value) {
    return {
        type: types.UPDATE_WHAT,
        payload: value
    };
}

export function addNewHistoryItem(name, device, date, time) {
    return (dispatch) => {
        axios.post('https://connect-tablet-tracker.herokuapp.com/api/historyItems', { name, device, date, time })
        .then(res => {
            dispatch(findHistoryItems())
        })
        .catch(err => alert('Error, checkout unsuccessful'))
    }
}
