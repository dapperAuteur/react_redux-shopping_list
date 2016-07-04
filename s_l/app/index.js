import React from 'react';
import ReactDOM from 'react-dom';

import { fromJS } from 'immutable';

import { App } from './components/app';
//

import {createStore} from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './reducer';

require('./css/main.scss');

import firebase from 'firebase';


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
})
// var initialState;
// var config = {
//     apiKey: "AIzaSyBOxxxEKosT5Gu98rD9LqDNOWOlJOs4D2E",
//     authDomain: "react-shopping-list.firebaseapp.com",
//     databaseURL: "https://react-shopping-list.firebaseio.com",
//     storageBucket: "react-shopping-list.appspot.com",
// };
// firebase.initializeApp(config);
// var rootRef = firebase.database().ref();
// rootRef.once("value")
//   .then(function(snapshot) {
//     initialState = snapshot.val();
//     // console.log(initialState);
//   });
const store = createStore(reducer, initialState, window.devToolsExtension ? window.devToolsExtension() : undefined);


ReactDOM.render(
    <Provider store={store}>
        <App name="Shopping List" />
    </Provider>,
    document.getElementById('app')
);
