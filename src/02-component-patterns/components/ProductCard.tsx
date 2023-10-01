import { createContext } from 'react';

import { useProduct } from '../hooks';
import styles from '../styles/styles.module.css';

import { IProductContextProps, IProductCardProps } from '../interfaces';

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: IProductCardProps) => {
	const { counter, incresBy } = useProduct();

	return (
		<Provider value={{ counter, incresBy, product }}>
			<div className={styles.productCard}>{children}</div>
		</Provider>
	);
};
