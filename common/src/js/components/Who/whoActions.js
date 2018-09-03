export const types = {
    UPDATE_WHO: 'UPDATE_WHO',
}

export function updateEmployeeSelect(value) {
    return {
        type: types.UPDATE_WHO,
        payload: value
    };
}