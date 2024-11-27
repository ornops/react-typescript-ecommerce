import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import styles from './cart-styles.module.scss'

const CartComponent = () => {
	return (
		<div className={styles.cartContainer}>
			<FiShoppingCart size={25} className={styles.cartIcon} />
		</div>
	)
}

export default CartComponent
