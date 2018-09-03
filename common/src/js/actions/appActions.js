import axios from 'axios';

export const types = {
    ALL_EMPLOYEES: 'ALL_EMPLOYEES',
    ALL_HISTORY_ITEMS: 'ALL_HISTORY_ITEMS',
    ALL_DEVICES: 'ALL_DEVICES'
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