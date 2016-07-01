import { expect } from 'chai';
import { Map, fromJS } from 'immutable';

import { reducer } from '../app/reducer.js';
import { toggleItem, deleteItem, addItem } from '../app/action_creators';

describe("reducer()", () => {
    
    it('returns empty Map if currentState is undefined', () => {
        expect(reducer(undefined, undefined)).to.eq(Map());
    });
    
    describe('TOGGLE_ITEM', () => {
        const currentState = fromJS({
            items: [
                { id: 3, purchased: false },
                { id: 2, purchased: true }
            ]
        });
        
        const action = toggleItem(3);
        
        const nextState = reducer(currentState, action);
        
        it('changes purchased for correct item', () => {
            expect(nextState.getIn(['items', 0, 'purchased'])).to.eq(true);
        });
        
        it('does NOT change purchased for other item', () => {
            expect(nextState.getIn(['items', 1, 'purchased'])).to.eq(true);
        });
    });
    
    describe('DELETE_ITEM', () => {
        const currentState = fromJS({
            items: [
                { id: 3, purchased: false },
                { id: 2, purchased: true }
            ]
        });
        
        const action = deleteItem(3);
        
        const nextState = reducer(currentState, action);
        
        it('deletes item with id: 3', () => {
            expect(nextState.get('items').size).to.eq(1);
        });
        
        it('keeps item with id: 2', () => {
            expect(nextState.getIn(['items', 0, 'id'])).to.eq(2);
        });
    
    });
    
    describe('ADD_ITEM', () => {
        const currentState = fromJS({
            items: [
                { id: 3, item: "test item 1", purchased: false },
                { id: 2, item: "test item 2", purchased: true }
                ]
        });
        
        const action = addItem('test item 3')
        
        const nextState = reducer(currentState, action);
        it('adds item to List at the end', () => {
            expect(nextState.getIn(['items', -1, 'item'])).to.eq('test item 3');
        });
        
        it('has size of 3', () => {
            expect(nextState.get('items').size).to.eq(3);
        });
        
    });
});