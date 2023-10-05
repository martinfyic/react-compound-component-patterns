import { useEffect, useRef, useState } from 'react';
import { IProduct, onChangeArgs } from '../interfaces';
import { InitialValues } from '../interfaces/product';

interface useProductsArgs {
	product: IProduct;
	value?: number;
	initialValues?: InitialValues;
	onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({
	onChange,
	product,
	value = 0,
	initialValues,
}: useProductsArgs) => {
	const [counter, setCounter] = useState<number>(initialValues?.count || value);
	const isMounted = useRef(false);

	const incresBy = (value: number) => {
		let newValue = Math.max(counter + value, 0);
		if (initialValues?.maxCount) {
			newValue = Math.min(newValue, initialValues?.maxCount);
		}

		setCounter(newValue);
		onChange && onChange({ count: newValue, product });
	};

	const reset = () => {
		setCounter(initialValues?.count || value);
	};

	useEffect(() => {
		if (!isMounted.current) return;

		setCounter(value);
	}, [value]);

	useEffect(() => {
		isMounted.current = true;
	}, []);

	return {
		counter,
		isMaxCountReached:
			!!initialValues?.count && initialValues.maxCount === counter,
		maxCount: initialValues?.maxCount,

		incresBy,
		reset,
	};
};
