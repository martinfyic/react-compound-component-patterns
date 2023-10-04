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
			// Elimninar objeto cuando el count es 0
			if (count === 0) {
				const { [product.id]: toDelete, ...rest } = oldShoppingCard;
				return {
					...rest,
				};
			}
			return {
				...oldShoppingCard,
				[product.id]: { ...product, count },
			};
		});
	};

	return {
		shoppingCart,
		onProductCountChange,
	};
};
