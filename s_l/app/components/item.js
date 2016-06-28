import React from 'react';
import { connect } from 'react-redux';

export class Item extends React.Component {
    // render() and everything inside it is the Item component
    render() {
        return (
                <tr className={ this.props.purchased ? 'purchased' : 'not-purchased' }>
                    <td>{ this.props.name }</td>
                    <td>{ this.props.quantity }</td>
                </tr>
                )
    }
}
