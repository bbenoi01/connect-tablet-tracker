export const types = {
    ADD_NEW_HISTORY_ITEM: 'ADD_NEW_HISTORY_ITEM'
};

export function addNewHistoryItem() {
    return {
        type: types.ADD_NEW_HISTORY_ITEM,
        payload: {}
    }
}