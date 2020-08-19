import React, {useState, useEffect} from 'react';
import store from '../../store';
import Cart from '../../Components/Cart';
import {connect} from 'react-redux';
import Item from '../Item';
const ConnectedItemList = ({items, visibility, cart, dispatch}) => {
  const itemsList = items.map(book => {
   return <Item
          item={item}
          />
}) 
  return (
    <div>
      <h2>List of Item</h2>
        <button onClick={() => {
         dispatch({
          type : "TOGGLE_VISIBILITY"
         }) 
        }}>
      {
        visibility ? "HIDE" : "SHOW" 
      }
        </button>
      {visibility ? 
        <React.Fragment> 
          <Cart/>
          <ul>
            {itemsList}
          </ul>
        </React.Fragment>
        :
        <h3>There is no items in stock.</h3>

      }
    </div>
    
  )
}
const mapStateToProps = state => {
  return {
    visibility : state.visibility,
    cart : state.cart
  }
}
const BookList = connect(mapStateToProps)(ConnectedBookList);
export default BookList;
