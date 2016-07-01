import React from 'react';
import ReactDOM from 'react-dom';

import { fromJS } from 'immutable';

import { App } from './components/app';
//

import {createStore} from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './reducer';

require('./css/main.scss');

const initialState = fromJS({
    name: 'Groceries',
    items: [
        {
            id: 1,
            item: 'Carrots',
            quantity: 2,
            purchased: true,
        },
        {
            id: 2,
            item: 'Greek Yogurt',
            quantity: 1,
            purchased: true,
        },
        {
            id: 3,
            item: 'Almond Milk',
            quantity: '1 gallon',
            purchased: false,
        },
        {
            id: 4,
            item: 'Egg Whites',
            quantity: '2 dozen',
            purchased: false,
        }
    ]
});

const store = createStore(reducer, initialState, window.devToolsExtension ? window.devToolsExtension() : undefined);


ReactDOM.render(
    <Provider store={store}>
        <App name="Shopping List" />
    </Provider>,
    document.getElementById('app')
);