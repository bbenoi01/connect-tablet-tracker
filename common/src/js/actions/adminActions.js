import axios from 'axios';

export const types = {
    ALL_EMPLOYEES: 'ALL_EMPLOYEES',
    NEW_EMPLOYEE: 'NEW_EMPLOYEE',
    UPDATE_FIRST_NAME: 'UPDATE_FIRST_NAME',
    UPDATE_LAST_NAME: 'UPDATE_LAST_NAME',
    ALL_DEVICES: 'ALL_DEVICES',
    NEW_DEVICE: 'NEW_DEVICE',
    UPDATE_OS: 'UPDATE_OS',
    UPDATE_MODEL: 'UPDATE_MODEL'
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

export function updateFirstName(value) {
    return {
        type: types.UPDATE_FIRST_NAME,
        payload: value
    };
}

export function updateLastName(value) {
    return {
        type: types.UPDATE_LAST_NAME,
        payload: value
    }
}

export function addEmployee(firstName, lastName) {
    return (dispatch) => {
        axios.post('http://localhost:3000/api/employees', { firstName, lastName })
        .then(res => {
            dispatch(findEmployees())
        })
        .catch(err => alert('Error, employee not added'))
    }
}

export function removeEmployee(id) {
    return (dispatch) => {
        axios.delete(`http://localhost:3000/api/employees/${id}`)
        .then(res => {
            dispatch(findEmployees())
        })
        .catch(err => alert('Error, employee not removed'))
    }
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

export function updateOS(value) {
    return {
        type: types.UPDATE_OS,
        payload: value
    };
}

export function updateModel(value) {
    return {
        type: types.UPDATE_MODEL,
        payload: value
    };
}

export function addDevice(OS, model) {
    return (dispatch) => {
        axios.post('http://localhost:3000/api/devices', { OS, model })
        .then(res => {
            dispatch(findDevices())
        })
        .catch(err => alert('Error, device not added'))
    }
}

export function removeDevice(id) {
    return (dispatch) => {
        axios.delete(`http://localhost:3000/api/devices/${id}`)
        .then(res => {
            dispatch(findDevices())
        })
        .catch(err => alert('Error, device not removed'))
    }
}