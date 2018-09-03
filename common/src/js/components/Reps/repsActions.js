import axios from 'axios';

export const types = {
    ALL_EMPLOYEES: 'ALL_EMPLOYEES'
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

export function removeEmployee(id) {
    return (dispatch) => {
        axios.delete(`http://localhost:3000/api/employees/${id}`)
        .then(res => {
            dispatch(findEmployees())
        })
        .catch(err => alert('Error, employee not removed'))
    }
}