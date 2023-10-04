import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';

export interface IProduct {
	id: string;
	img?: string;
	title: string;
}

export interface IProductContextProps {
	counter: number;
	product: IProduct;
	incresBy: (value: number) => void;
}

export interface IProductCardHOCProps {
	({ children, product }: ProductCardProps): JSX.Element;
	Buttons: (Props: ProductButtonsProps) => JSX.Element;
	Image: (Props: ProductImageProps) => JSX.Element;
	Title: (Props: ProductTitleProps) => JSX.Element;
}

export interface onChangeArgs {
	product: IProduct;
	count: number;
}

export interface ProductInCart extends IProduct {
	count: number;
}
