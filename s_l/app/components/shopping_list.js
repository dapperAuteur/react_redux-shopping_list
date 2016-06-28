import React from 'react';
import { Item } from './item';

export class ShoppingList extends React.Component {
    // render() and everything inside it is ShoppingList component
    render() {
        return (
            <div className="shopping-list">
                <table>
                    <thead>
                        <h3>{ this.props.name }</h3>
                         <tr>
                            <th>Item</th>
                            <th>Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        { this.props.items.map( (i) =>// this tells the component to find items component and render it here
                            <Item key={i.get('id')}
                                id={i.get('id')}
                                name={i.get('name')}
                                quantity={i.get('quantity')}
                                purchased={i.get('purchased')}
                            />
                        )}
                    </tbody>
                </table>
                
            </div>
        );
    }
}