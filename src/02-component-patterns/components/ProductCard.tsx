import { CSSProperties, createContext } from 'react';

import { useProduct } from '../hooks';
import styles from '../styles/styles.module.css';

import {
	InitialValues,
	IProduct,
	IProductContextProps,
	onChangeArgs,
	ProductCardHandlers,
} from '../interfaces';

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export interface Props {
	// children?: ReactElement | ReactElement[];
	children: (args: ProductCardHandlers) => JSX.Element;
	className?: string;
	product: IProduct;
	style?: CSSProperties;
	value?: number;
	onChange?: (args: onChangeArgs) => void;
	initialValues?: InitialValues;
}

export const ProductCard = ({
	children,
	className,
	initialValues,
	onChange,
	product,
	style,
	value,
}: Props) => {
	const { counter, incresBy, maxCount, isMaxCountReached, reset } = useProduct({
		onChange,
		product,
		value,
		initialValues,
	});

	return (
		<Provider value={{ counter, incresBy, product, maxCount }}>
			<div
				className={`${styles.productCard} ${className}`}
				style={style}
			>
				{children({
					count: counter,
					isMaxCountReached,
					maxCount: initialValues?.maxCount,
					product,

					incresBy,
					reset,
				})}
			</div>
		</Provider>
	);
};
