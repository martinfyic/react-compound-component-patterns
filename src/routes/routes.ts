import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload';

interface IRoute {
	to: string;
	path: string;
	Component: () => JSX.Element;
	name: string;
}

export const routes: IRoute[] = [
	{
		to: '/lazy-1',
		path: 'lazy-1',
		Component: LazyPage1,
		name: 'LazyPage-1',
	},
	{
		to: '/lazy-2',
		path: 'lazy-2',
		Component: LazyPage2,
		name: 'LazyPage-2',
	},
	{
		to: '/lazy-3',
		path: 'lazy-3',
		Component: LazyPage3,
		name: 'LazyPage-3',
	},
];
