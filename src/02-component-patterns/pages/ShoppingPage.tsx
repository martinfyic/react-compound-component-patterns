import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTitle,
} from '../components';
import { products } from '../data';
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<ProductCard
				key={product.id}
				product={product}
				className='bg-dark text-white'
				initialValues={{
					count: 4,
					maxCount: 10,
				}}
			>
				{({ reset, incresBy, count, isMaxCountReached, maxCount }) => (
					<>
						<ProductImage className='custom-image' />
						<ProductTitle
							title='Cafe'
							className='text-white text-bold'
						/>
						<ProductButtons className='custom-buttoms' />

						<button onClick={reset}>Reset</button>
						<button onClick={() => incresBy(-2)}>-2</button>
						<button
							onClick={() => incresBy(+2)}
							hidden={isMaxCountReached}
						>
							+2
						</button>
						<span>
							{count} - {maxCount}
						</span>
					</>
				)}
			</ProductCard>
		</div>
	);
};
