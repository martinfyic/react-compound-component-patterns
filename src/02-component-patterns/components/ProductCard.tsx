import { CSSProperties, ReactElement, createContext } from 'react';

import { useProduct } from '../hooks';
import styles from '../styles/styles.module.css';

import { IProduct, IProductContextProps } from '../interfaces';

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export interface Props {
	children?: ReactElement | ReactElement[];
	className?: string;
	product: IProduct;
	style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
	const { counter, incresBy } = useProduct();

	return (
		<Provider value={{ counter, incresBy, product }}>
			<div
				className={`${styles.productCard} ${className}`}
				style={style}
			>
				{children}
			</div>
		</Provider>
	);
};
