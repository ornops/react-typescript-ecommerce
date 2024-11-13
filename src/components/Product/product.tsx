import { spawn } from 'child_process';
import React, { useState, useEffect } from 'react'

interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
}
const ProductComponent = () => {


	const [product, setProduct] = useState<Product | null>(null);
	useEffect(() => {
		fetch('https://fakestoreapi.com/products/1')
			.then(res => res.json())
			.then(json => setProduct(json))
			.catch((error) => console.error('Error fetching product:', error));
	}, [])

	return (
		<div>
			<span>{
				product ? (
					<div>{product.title}
						<p>{product.id}</p>
						<p>{product.price}</p>
						<p>{product.description}</p>
						<p>{product.category}</p>
						<img src={product.image} alt="wew" />


					</div>

				) : (
					<p>Loading ...</p>
				)}</span>
		</div>
	)
}

export default ProductComponent
