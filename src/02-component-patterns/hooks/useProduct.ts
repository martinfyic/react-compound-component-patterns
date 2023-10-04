import { useEffect, useRef, useState } from 'react';
import { IProduct, onChangeArgs } from '../interfaces';

interface useProductsArgs {
	product: IProduct;
	value?: number;
	onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({
	onChange,
	product,
	value = 0,
}: useProductsArgs) => {
	const [counter, setCounter] = useState<number>(value);
	const isControlled = useRef(!!onChange);

	const incresBy = (value: number) => {
		if (isControlled.current) {
			return onChange!({ count: value, product });
		}

		const newValue = Math.max(counter + value, 0);
		setCounter(newValue);
		onChange && onChange({ count: newValue, product });
	};

	useEffect(() => {
		setCounter(value);
	}, [value]);

	return {
		counter,
		incresBy,
	};
};
