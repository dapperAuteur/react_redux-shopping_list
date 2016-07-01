import React from 'react';
import { connect } from 'react-redux';
import { toggleItem, deleteItem } from '../action_creators';

export class Item extends React.Component {
    // render() and everything inside it is the Item component
    render() {
        return (
                <div>
                    <div className={ this.props.purchased ? 'purchased' : 'not-purchased' }
                        onClick={ this.props.toggleItem }>
                        <ul><li>{ this.props.item }{': '}
                        { this.props.quantity }</li></ul>
                    </div>
                    <div className="delete"
                        onClick={ this.props.deleteItem }>[X]
                    </div>
                </div>
                );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleItem: () => dispatch(toggleItem(ownProps.id)),
        deleteItem: () => dispatch(deleteItem(ownProps.id)),
        
    };
};

export const ItemContainer = connect(undefined, mapDispatchToProps)(Item);