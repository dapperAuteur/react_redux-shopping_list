import React from 'react';
import ReactDOM from 'react-dom';

import { fromJS } from 'immutable';

import App from './components/app';

require('./css/main.scss');

const initialState = fromJS({
    name: 'Groceries',
    items: [
        {
            id: 1,
            name: 'Carrots',
            quantity: 2,
            purchased: true,
        },
        {
            id: 2,
            name: 'Greek Yogurt',
            quantity: 1,
            purchased: true,
        },
        {
            id: 3,
            name: 'Almond Milk',
            quantity: '1 gallon',
            purchased: false,
        },
        {
            id: 4,
            name: 'Egg Whites',
            quantity: '2 dozen',
            purchased: false,
        }
    ]
});



ReactDOM.render(
    <App state={initialState} />,
    document.getElementById('app')
);