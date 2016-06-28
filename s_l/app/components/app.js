import React from 'react';
import { ShoppingList } from './shopping_list';

export default class App extends React.Component {
    // render() and everything inside it is the App component
    render() {
        return (
            <div className="app">
                <h1>Hello, world!</h1>
                <div className="shopping-list">
                
                    <ShoppingList name={ this.props.state.get('name') } //name ShoppingList component taken from initialState object
                    // gets the 'items' out of the state
                        items={ this.props.state.get('items') }/>
                </div>
                <div className="item">
                    
                </div>
            </div>
            );
    }
};