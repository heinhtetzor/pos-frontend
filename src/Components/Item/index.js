import React from 'react';
import {connect, useStore} from 'react-redux';
import styles from './Item.module.css';
const ConnectedItem = ({item, dispatch}) => {
  const store = useStore();
  return (
  <div 
    className={styles.item}
    key={item.id}
    onClick={() => {
      dispatch({
        type : 'ADD_TO_CART',
        id : item.id,
        price : item.price
      })
    }}
    >
    {item.name}  <p>${(item.price/100).toFixed(2)}</p>
  </div>
  )
}
const Item = connect(null)(ConnectedItem);
export default Item;

