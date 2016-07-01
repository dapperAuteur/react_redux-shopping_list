import React from 'react';
import { connect } from 'react-redux';
import { Item } from './item';
import { ItemContainer } from './item';

export class ShoppingList extends React.Component {
    // render() and everything inside it is ShoppingList component
    render() {
        return (
            <div className="shopping-list">
                
                        <h3>{ this.props.name }</h3>
                         <h4>Item | Qty</h4>
                    
                        { this.props.items.map( (i) =>// this tells the component to find items component and render it here
                            <ItemContainer key={i.get('id')}
                                id={i.get('id')}
                                item={i.get('item')}
                                quantity={i.get('quantity')}
                                purchased={i.get('purchased')}
                            />
                        )}
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.get('items')
    };
};

export const ShoppingListContainer = connect(mapStateToProps)(ShoppingList);
