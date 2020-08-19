import React, {useEffect, useState} from 'react';
import store from '../../store.js';
import {connect, useStore} from 'react-redux';
import  ClearTooltip from '../ClearTooltip';
import CartItem from '../CartItem';
import styles from './Cart.module.css';
import { API } from '../../env';
//will keep total price inside local state
const ConnectedCart = ({ cart, items, dispatch, currentTable}) => {
  const store = useStore();
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const cartItems = cart.map((cart_item) => {
    return <CartItem 
            cart_item={cart_item}
            items={items}
            />
    
  })
  const handleClearCart = () => {
    dispatch({
      type : 'CLEAR_CART'
    })
  }
  const totalCartItems = cart.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0)
  const totalCost = cart.reduce((acc, cur) => {
    return acc + (cur.price * cur.quantity);
  }, 0)
  useEffect(() => {
    document.title = `$ ${(totalCost/100).toFixed(2)} - Point of Sale`;
  
  })
  const processOrder = () => {
    console.log(store.getState())
    fetch(`${API}/orders`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        table : currentTable,    
        orderItems : cart
      })
    })
    .then(res => res.json())
    .then(res => {
      if(res.isDone) {
        dispatch({
          type : 'CLEAR_CART'
        })
      }
    });
  }
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartHeader}> 
        <h3 className={styles.cartTitle}>{totalCartItems} items in Cart.</h3>
        <button
        className={styles.clearButton} 
        // onClick={() => {
        //   dispatch({
        //     type : 'CLEAR_CART'
        //   })
        // }}
        onClick={() => {
          setIsTooltipOpen(!isTooltipOpen);
        }}
        >
          Clear
        </button>

      </div>
      <ClearTooltip
      isOpen={isTooltipOpen}
      onClearCart={handleClearCart}
      onClose={() => {
        setIsTooltipOpen(false);
      }}
      />
      <div className={styles.cartItemList}>
        {cartItems}
      </div>
      <p className={styles.totalText}>Total - ${(totalCost/100).toFixed(2)}</p>
      <button
        onClick={processOrder}
        className={styles.orderButton}>Order</button> 

    </div>
  )
}
const mapStateToProps = state => {
  return {
    cart : state.cart,
    items : state.items,
    currentTable : state.currentTable
  }
}
const Cart = connect(mapStateToProps)(ConnectedCart);
export default Cart;
