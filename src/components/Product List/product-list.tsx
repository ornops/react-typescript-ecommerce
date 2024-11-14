import React, { useState, useEffect } from "react";
import { Product } from "../../types/Product";
import { fetchProduct } from "../../services/productService";
import ProductCard from "../Product Card/product-card";
import './product-list-styles.scss';



const ProductList: React.FC = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const getProducts = async () => {
			const data = await fetchProduct();
			setProducts(data);
		};
		getProducts();
	}, []);

	return (
		<div className="product-list">
			{products.length === 0 ? (
				<p>No products available.</p>
			) : (
				products.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)
			)}
		</div>
	);
};

export default ProductList;

//

// import { Product } from '../../types/Product';
// import { fetchProduct } from '../../services/productService';


// const ProductList: React.FC = () => {
// 	const [products, setProducts] = useState:<Product[] > ([]);

// 	useEffect(() => {
// 		const getProducts = async () => {
// 			const data = await fetchProduct();
// 			setProducts(data)
// 		}
// 		getProducts();
// 	}, [])

// 	return (
// 		<div className='product-list'>
// 			{
// 				products.length === 0 ? (
// 					<p>No products Available</p>
// 				) : (
// 					products.map((product: Product) => (
// 						<div key={product.id}>
// 							<h2>{product.title}</h2>
// 							<p>Price: {product.price.toFixed(2)}</p>
// 							<img src={product.image} alt={product.title} />
// 						</div>
// 					))
// 				)
// 			}
// 		</div>
// 	)
// }

// export default ProductList
