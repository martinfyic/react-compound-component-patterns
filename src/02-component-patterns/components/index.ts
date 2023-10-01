import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductButtons, ProductImage, ProductTitle } from './';
import { IProductCardHOCProps } from '../interfaces';

export * from './ProductButtons';
export * from './ProductImage';
export * from './ProductTitle';

export const ProductCard: IProductCardHOCProps = Object.assign(ProductCardHOC, {
	Buttons: ProductButtons,
	Image: ProductImage,
	Title: ProductTitle,
});
