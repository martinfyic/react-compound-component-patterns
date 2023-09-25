import { Suspense } from 'react';

import {
	BrowserRouter,
	Route,
	Routes,
	NavLink,
	Navigate,
} from 'react-router-dom';

import ReactLogo from '../assets/react-logo.svg';
import { routes } from './';

export const Navigation = () => {
	return (
		<Suspense fallback={<h2>Loading...</h2>}>
			<BrowserRouter>
				<div className='main-layout'>
					<nav>
						<img
							src={ReactLogo}
							alt='ReacJs Logo'
							width={100}
							height={100}
						/>
						<ul>
							{routes.map(({ to, name }) => (
								<li key={to}>
									<NavLink
										to={to}
										className={({ isActive }) => (isActive ? 'nav-active' : '')}
									>
										{name}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>

					<Routes>
						{routes.map(({ path, component: Component }) => (
							<Route
								key={path}
								path={path}
								element={<Component />}
							/>
						))}

						<Route
							path='/*'
							element={
								<Navigate
									to={routes[0].to}
									replace
								/>
							}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</Suspense>
	);
};
