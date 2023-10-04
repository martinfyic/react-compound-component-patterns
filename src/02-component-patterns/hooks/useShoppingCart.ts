import { useState } from 'react';

import { IProduct, ProductInCart } from '../interfaces';

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{
		[key: string]: ProductInCart;
	}>({});

	interface onProductCountChangeProps {
		count: number;
		product: IProduct;
	}

	const onProductCountChange = ({
		count,
		product,
	}: onProductCountChangeProps) => {
		setShoppingCart(oldShoppingCard => {
			const productInCart: ProductInCart = oldShoppingCard[product.id] || {
				...product,
				count: 0,
			};

			if (Math.max(productInCart.count + count, 0) > 0) {
				productInCart.count += count;
				return {
					...oldShoppingCard,
					[product.id]: productInCart,
				};
			}

			//Borrar Porducto
			const { [product.id]: toDelete, ...rest } = oldShoppingCard;
			return rest;

			// opcion 2
			// Elimninar objeto cuando el count es 0
			// if (count === 0) {
			// 	const { [product.id]: toDelete, ...rest } = oldShoppingCard;
			// 	return {
			// 		...rest,
			// 	};
			// }
			// return {
			// 	...oldShoppingCard,
			// 	[product.id]: { ...product, count },
			// };
		});
	};

	return {
		shoppingCart,
		onProductCountChange,
	};
};
