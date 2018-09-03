import axios from 'axios';

export const types = {
    NEW_EMPLOYEE: 'NEW_EMPLOYEE',
    UPDATE_FIRST_NAME: 'UPDATE_FIRST_NAME',
    UPDATE_LAST_NAME: 'UPDATE_LAST_NAME',
    ALL_EMPLOYEES: 'ALL_EMPLOYEES',
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
        axios.post('https://connect-tablet-tracker.herokuapp.com/api/employees', { firstName, lastName })
        .then(res => {
            dispatch(findEmployees())
        })
        .catch(err => alert('Error, employee not added'))
    }
}