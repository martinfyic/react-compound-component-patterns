import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'));

type JSXComponent = () => JSX.Element;

interface IRoute {
	to: string;
	path: string;
	component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
}

export const routes: IRoute[] = [
	{
		to: '/lazylayout/',
		path: '/lazylayout/*',
		component: LazyLayout,
		name: 'LazyLayout - Dash',
	},
	{
		to: '/no-lazy',
		path: 'no-lazy',
		component: NoLazy,
		name: 'No Lazy',
	},
];
