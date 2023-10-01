import { ReactElement } from 'react';

export interface IProductCardProps {
	children?: ReactElement | ReactElement[];
	product: IProduct;
}

export interface IProduct {
	id: string;
	title: string;
	img?: string;
}

export interface IProductContextProps {
	counter: number;
	incresBy: (value: number) => void;
	product: IProduct;
}

export interface IProductCardHOCProps {
	({ children, product }: IProductCardProps): JSX.Element;
	Buttons: () => JSX.Element;
	Image: ({ img }: { img?: string | undefined }) => JSX.Element;
	Title: ({ title }: { title?: string | undefined }) => JSX.Element;
}
