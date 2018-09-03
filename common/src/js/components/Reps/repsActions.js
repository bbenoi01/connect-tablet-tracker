import axios from 'axios';

export const types = {
    ALL_EMPLOYEES: 'ALL_EMPLOYEES'
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

export function removeEmployee(id) {
    return (dispatch) => {
        axios.delete(`https://connect-tablet-tracker.herokuapp.com/api/employees/${id}`)
        .then(res => {
            dispatch(findEmployees())
        })
        .catch(err => alert('Error, employee not removed'))
    }
}