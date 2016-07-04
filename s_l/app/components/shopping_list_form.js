import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../action_creators';

let AddItem = ({ dispatch }) => {
    let inputItem
    let inputQuantity
    
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!inputItem.value.trim()) {
                    return;
                }
                // ref.on("child_added", function(dataSnapshot) {
                //     this.items.push(dataSnapshot.val());
                //     this.setState({
                //       items: this.items
                //     });
                //   }.bind(this));
                dispatch(addItem(inputItem.value, inputQuantity.value));
                inputItem.value = '';
                inputQuantity.value = '';
            }}>
                <h3>Item</h3><input ref={nodeItem => {
                    inputItem = nodeItem;
                }} />
                <h3>Quantity</h3><input ref={nodeQuantity => {
                    inputQuantity = nodeQuantity;
                }} /><br /><br />
                <button type="submit">
                    Add To Do
                </button>
            </form>
        </div>
    );
};

AddItem = connect()(AddItem);

export default AddItem;

const mapStateToProps = (state) => {
    return {
        items: state.get('items')
    };
}

export const ShoppingListFormContainer = connect(mapStateToProps)(AddItem);