import axios from 'axios';

export const types = {
    ALL_DEVICES: 'ALL_DEVICES'
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

export function removeDevice(id) {
    return (dispatch) => {
        axios.delete(`https://connect-tablet-tracker.herokuapp.com/api/devices/${id}`)
        .then(res => {
            dispatch(findDevices())
        })
        .catch(err => alert('Error, device not removed'))
    }
}