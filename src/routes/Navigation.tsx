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
						{routes.map(({ to, name }) => {
							return (
								<li key={to}>
									<NavLink
										to={to}
										className={({ isActive }) => (isActive ? 'nav-active' : '')}
									>
										{name}
									</NavLink>
								</li>
							);
						})}
					</ul>
				</nav>

				<Routes>
					{routes.map(({ path, Component }) => {
						return (
							<Route
								path={path}
								element={<Component />}
							/>
						);
					})}

					<Route
						path='/*'
						element={
							<Navigate
								to='/lazy-1'
								replace
							/>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
};
