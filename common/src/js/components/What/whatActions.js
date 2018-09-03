export const types = {
    UPDATE_WHAT: 'UPDATE_WHAT'
}

export function updateDeviceSelect(value) {
    return {
        type: types.UPDATE_WHAT,
        payload: value
    };
}