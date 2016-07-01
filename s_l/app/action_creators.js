export function toggleItem(id) {
    return {
        type: 'TOGGLE_ITEM',
        id
    };
}

export function deleteItem(id) {
    return {
        type: 'DELETE_ITEM',
        id
    };
}

export function addItem(item, quantity) {
    return {
        type: 'ADD_ITEM',
        item,
        quantity
    };
}