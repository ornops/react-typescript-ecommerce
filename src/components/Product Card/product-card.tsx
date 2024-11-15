import React from 'react'
import { Product } from '../../types/Product'
import styles from './product-card-styles.module.scss'

interface ProductCardProps {
	product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	return (
		<div className={styles.productCard}>
			<div className={styles.imageContainer}>
				<img src={product.image} alt={product.title} className={styles.productCartImage} />
			</div>
			<div className={styles.titleContainer}>
				<h3>{product.title}</h3>
			</div>


		</div>
	)
}

export default ProductCard
