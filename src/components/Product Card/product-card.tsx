import React from 'react'
import { Product } from '../../types/Product'

interface ProductCardProps {
	product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	return (
		<div>
			<img src={product.image} alt={product.title} className='product-card-image' />
			<h3>{product.title}</h3>
			<p>{product.price.toFixed(2)}</p>
		</div>
	)
}

export default ProductCard
