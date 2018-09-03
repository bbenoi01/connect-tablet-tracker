import axios from 'axios';

export const types = {
    ALL_EMPLOYEES: 'ALL_EMPLOYEES',
    ALL_DEVICES: 'ALL_DEVICES'
}

export function findEmployees() {
    return (dispatch) => {
        axios.get('https://connect-tablet-tracker.herokuapp.com/api/employees')
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
        axios.get('https://connect-tablet-tracker.herokuapp.com/api/devices')
        .then(res => {
            dispatch({
                type: types.ALL_DEVICES,
                payload: res.data
            })
        })
        .catch(err => alert('Error, devices not found'))
    };
}