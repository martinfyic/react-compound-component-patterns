import {
	BrowserRouter,
	Route,
	Routes,
	NavLink,
	Navigate,
} from 'react-router-dom';
import ReactLogo from '../assets/react-logo.svg';
import { ShoppingPage } from '../02-component-patterns';

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
						<li>
							<NavLink
								to='/'
								className={({ isActive }) => (isActive ? 'nav-active' : '')}
							>
								Shopping
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/about'
								className={({ isActive }) => (isActive ? 'nav-active' : '')}
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/users'
								className={({ isActive }) => (isActive ? 'nav-active' : '')}
							>
								Users
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route
						path='/about'
						element={<h1>About</h1>}
					/>
					<Route
						path='/users'
						element={<h1>Users</h1>}
					/>
					<Route
						path='/'
						element={<ShoppingPage />}
					/>
					<Route
						path='/*'
						element={
							<Navigate
								to='/'
								replace
							/>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
};
