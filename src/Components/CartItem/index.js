import React from 'react';
import styles from './CartItem.module.css';
import { useDispatch } from 'react-redux';
const CartItem = ({ cart_item, items }) => {
	let dispatch = useDispatch();
	let item = items.find(x => x.id === cart_item.id);
	return (
		<div 
		className={styles.cartItem}
		key={cart_item.id}>
			<div className={styles.cartItemName}> 
			{item.name} -
			</div>
			<div className={styles.cartItemPrice}> 
				${(item.price/100).toFixed(2)} x
				<div className={styles.cartItemQuantity}>
					<div 
					className={styles.qtyBtn}
					onClick={() => {
						dispatch({
							type : 'CHANGE_QUANTITY',
							id : cart_item.id,
							command : 'up'
						})
					}}>+</div>
					{cart_item.quantity}
					<div className={styles.qtyBtn}
					onClick={() => {
						dispatch({
							type : 'CHANGE_QUANTITY',
							id : cart_item.id,
							command : 'down'
						})
					}}>-</div>
				</div>
			</div>
			<div className={styles.cartItemTotal}>
				$ {(item.price * cart_item.quantity / 100).toFixed(2)} 
			</div>
		</div>
		);
}

export default CartItem;