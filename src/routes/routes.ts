import { lazy, LazyExoticComponent } from 'react';

// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload';

const LazyPage1 = lazy(
	() => import(/* webpackChunkName: "Lazy1" */ '../01-lazyload/pages/LazyPage1')
);
const LazyPage2 = lazy(
	() => import(/* webpackChunkName: "Lazy2" */ '../01-lazyload/pages/LazyPage2')
);
const LazyPage3 = lazy(
	() => import(/* webpackChunkName: "Lazy3" */ '../01-lazyload/pages/LazyPage3')
);

type JSXComponent = () => JSX.Element;

interface IRoute {
	to: string;
	path: string;
	component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
}

export const routes: IRoute[] = [
	{
		to: '/lazy-1',
		path: 'lazy-1',
		component: LazyPage1,
		name: 'LazyPage-1',
	},
	{
		to: '/lazy-2',
		path: 'lazy-2',
		component: LazyPage2,
		name: 'LazyPage-2',
	},
	{
		to: '/lazy-3',
		path: 'lazy-3',
		component: LazyPage3,
		name: 'LazyPage-3',
	},
];
