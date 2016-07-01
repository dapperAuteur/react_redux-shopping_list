import React from 'react';
// added to test, make the initial state immutable
import { fromJS } from 'immutable';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { App } from '../../app/components/app';
// add fromJS to object to make it immutable
const state = fromJS({
    items: [
        {
            id: 1,
            name: 'Carrots',
            quantity: 2,
            purchased: true
        },
        {
            id: 2,
            name: 'Greek Yogurt',
            quantity: 1,
            purchased: true
        },
        {
            id: 3,
            name: 'Almond Milk',
            quantity: '1 gallon',
            purchased: false
        }
    ]
});

describe('<App>', () => {
    describe('render()', () => {
        const wrapper = shallow(<App name="Better Shopping List" state={state}/>);
        
        it('renders 2 h1 tags', () => {
            expect(wrapper).to.have.exactly(1).descendants('h2');
        });
        
        it('renders name of application', () => {
            expect(wrapper).to.include.text("Better Shopping List");
        });
        
        it('renders ShoppingListContainer', () => {
            expect(wrapper.find('Connect(ShoppingList)')).to.have.length(1);
        });
    });
});