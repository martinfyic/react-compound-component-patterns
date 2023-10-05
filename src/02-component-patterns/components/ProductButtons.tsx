import { CSSProperties, useCallback, useContext } from 'react';

import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface Props {
	className?: string;
	style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
	const { counter, incresBy, maxCount } = useContext(ProductContext);

	//isMaxReached = useCallBack, [counter, maxCount]
	// TRUE si el count === maxCount
	// FALSE si no lo es
	const isMaxReached = useCallback(
		() => !!maxCount && counter === maxCount,
		[counter, maxCount]
	);

	return (
		<div
			className={`${styles.buttonsContainer} ${className}`}
			style={style}
		>
			<button
				className={styles.buttonMinus}
				onClick={() => incresBy(-1)}
			>
				-
			</button>
			<div className={styles.countLabel}>{counter}</div>
			<button
				className={`${styles.buttonMinus} ${isMaxReached() && styles.disable}`}
				onClick={() => incresBy(+1)}
			>
				+
			</button>
		</div>
	);
};
