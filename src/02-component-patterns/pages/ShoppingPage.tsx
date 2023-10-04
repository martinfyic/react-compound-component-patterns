import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTitle,
} from '../components';
import { products } from '../data';
import { useShoppingCart } from '../hooks';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
	const { onProductCountChange, shoppingCart } = useShoppingCart();

	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
				}}
			>
				{products.map(product => (
					<ProductCard
						key={product.id}
						product={product}
						className='bg-dark text-white'
						onChange={onProductCountChange}
						value={shoppingCart[product.id]?.count || 0}
					>
						<ProductImage className='custom-image' />
						<ProductTitle
							title='Cafe'
							className='text-white text-bold'
						/>
						<ProductButtons className='custom-buttoms' />
					</ProductCard>
				))}
			</div>

			{/* Tarjeta de carrito */}
			<div className='shopping-cart'>
				{Object.entries(shoppingCart).map(([key, product]) => (
					<ProductCard
						key={key}
						product={product}
						className='bg-dark text-white'
						style={{ width: '150px' }}
						value={product.count}
						onChange={onProductCountChange}
					>
						<ProductImage className='custom-image' />
						<ProductButtons
							className='custom-buttoms'
							style={{
								display: 'flex',
								justifyContent: 'center',
							}}
						/>
					</ProductCard>
				))}
			</div>
		</div>
	);
};
