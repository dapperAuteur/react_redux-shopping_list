import  { Map, fromJS } from 'immutable';

// reducer is a pure function that takes 'currentState' and an action as parameters

// const getItemsAndItemIndex = (currentState, id) => {
//     const items = currentState.get('items');
//     const itemIndex = items.findIndex( (el) => el.get('id') == id);
    
//     const itemsAndItemIndex = [];
    
//     itemsAndItemIndex.push(items, itemIndex);
    
//     return itemsAndItemIndex;
//      how do I send the result of this function to the toggleItem & deleteItem functions and make this function run before the other two
// }

// function 'toggleItem' takes 2 parameters 'currentState' & 'id'
const toggleItem = (currentState, id) => {
    // finds the items List gets its currentState
    const items = currentState.get('items');
    // finds the item id in items array using id
    const itemIndex = items.findIndex( (el) => el.get('id') == id);
    
    
    const oldItem = items.get(itemIndex);
    const newItem = oldItem.set('purchased', !oldItem.get('purchased'));
    const newItems = items.set(itemIndex, newItem);
    
    return currentState.merge({items: newItems});
};

const deleteItem = (currentState, id) => {
    // finds the items List gets its currentState
    const items = currentState.get('items');
    // finds the item id in items array using id
    const itemIndex = items.findIndex( (el) => el.get('id') == id);
    
    const newItems = items.remove(itemIndex);
    
    return currentState.merge({items: newItems});
};

const addItem = (currentState, item, quantity ) => {
    // finds the items List gets its currentState
    const items = currentState.get('items');
    
    const newItem = { item, quantity, id: items.last().get('id') + 1, purchased: false };
    
    const newItems = items.push(fromJS(newItem));
    
    return currentState.merge({items: newItems});
};

// reducer returns the nextState
export function reducer(currentState = new Map(), action) {
    if(action !== undefined) {
        switch(action.type) {
            case 'TOGGLE_ITEM':
                return toggleItem(currentState, action.id);
            case 'DELETE_ITEM':
                return deleteItem(currentState, action.id);
            case 'ADD_ITEM':
                return addItem(currentState, action.item, action.quantity);
        }
    }
    return currentState;
}
