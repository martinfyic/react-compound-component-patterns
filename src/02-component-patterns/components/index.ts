import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductButtons, ProductImage, ProductTitle } from './';
import { IProductCardHOCProps } from '../interfaces';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCard: IProductCardHOCProps = Object.assign(ProductCardHOC, {
	Buttons: ProductButtons,
	Image: ProductImage,
	Title: ProductTitle,
});
