import axios from 'axios';

export const types = {
    NEW_DEVICE: 'NEW_DEVICE',
    UPDATE_OS: 'UPDATE_OS',
    UPDATE_MODEL: 'UPDATE_MODEL',
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
        axios.post('https://connect-tablet-tracker.herokuapp.com/api/devices', { OS, model })
        .then(res => {
            dispatch(findDevices())
        })
        .catch(err => alert('Error, device not added'))
    }
}