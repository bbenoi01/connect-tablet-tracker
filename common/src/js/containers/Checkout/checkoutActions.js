import axios from 'axios';

export const types = {
    ALL_HISTORY_ITEMS: 'ALL_HISTORY_ITEMS',
    ALL_EMPLOYEES: 'ALL_EMPLOYEES',
    ALL_DEVICES: 'ALL_DEVICES',
    ADD_NEW_HISTORY_ITEM: 'ADD_NEW_HISTORY_ITEM'
}

export function findHistoryItems() {
    return (dispatch) => {
        axios.get('http://localhost:3000/api/historyItems')
        .then(res => {
            dispatch({
                type: types.ALL_HISTORY_ITEMS,
                payload: res.data
            })
        })
        .catch(err => alert('Error, items not found'))
    };
}

export function findEmployees() {
    return (dispatch) => {
        axios.get('http://localhost:3000/api/employees')
        .then(res => {
            dispatch({
                type: types.ALL_EMPLOYEES,
                payload: res.data
            })      
        })
        .catch(err => alert('Error, employees not found'))    
    };
}

export function findDevices() {
    return (dispatch) => {
        axios.get('http://localhost:3000/api/devices')
        .then(res => {
            dispatch({
                type: types.ALL_DEVICES,
                payload: res.data
            })
        })
        .catch(err => alert('Error, devices not found'))
    };
}

export function addNewHistoryItem(name, device, date, time, timestamp) {
    return (dispatch) => {
        axios.post('http://localhost:3000/api/historyItems', { name, device, date, time, timestamp })
        .then(res => {
            dispatch(findHistoryItems())
        })
        .catch(err => alert('Error, checkout unsuccessful'))
    }
}