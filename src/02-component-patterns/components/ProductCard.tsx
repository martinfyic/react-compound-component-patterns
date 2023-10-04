import { CSSProperties, ReactElement, createContext } from 'react';

import { useProduct } from '../hooks';
import styles from '../styles/styles.module.css';

import { IProduct, IProductContextProps, onChangeArgs } from '../interfaces';

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export interface Props {
	children?: ReactElement | ReactElement[];
	className?: string;
	product: IProduct;
	style?: CSSProperties;
	value?: number;
	onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({
	children,
	className,
	onChange,
	product,
	style,
	value,
}: Props) => {
	const { counter, incresBy } = useProduct({ onChange, product, value });

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
