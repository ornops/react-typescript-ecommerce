import React from 'react'
import { Product } from '../../types/Product'
import styles from './product-card-styles.module.scss'

interface ProductCardProps {
	product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	return (
		<div className={styles.productCard}>
			<img src={product.image} alt={product.title} className={styles.productCartImage} />
			<h3>{product.title}</h3>
			<p>{product.price.toFixed(2)}</p>
		</div>
	)
}

export default ProductCard
