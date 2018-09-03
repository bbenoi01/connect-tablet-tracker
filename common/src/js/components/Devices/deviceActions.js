import axios from 'axios';

export const types = {
    ALL_DEVICES: 'ALL_DEVICES'
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

export function removeDevice(id) {
    return (dispatch) => {
        axios.delete(`http://localhost:3000/api/devices/${id}`)
        .then(res => {
            dispatch(findDevices())
        })
        .catch(err => alert('Error, device not removed'))
    }
}