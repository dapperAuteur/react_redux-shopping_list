import React from 'react';
import { ShoppingListContainer } from './shopping_list';
import { AddItem, ShoppingListFormContainer } from './shopping_list_form';
import Firebase from 'firebase';

export class App extends React.Component {
    // render() and everything inside it is the App component

    render() {
        return (
            <div className="app">
                <div className="shopping-list">
                    <h2>{ this.props.name }</h2>

                    <ShoppingListContainer name={ this.props.item } //item ShoppingList component taken from initialState object
                    // gets the 'items' out of the state
                        items={ this.props.items }/>
                </div>
                <div className="shopping_list_form">
                    <h1>{ this.props.form }</h1>
                    <ShoppingListFormContainer />
                </div>
            </div>
            );
    }
};
