import {
	BrowserRouter,
	Route,
	Routes,
	NavLink,
	Navigate,
} from 'react-router-dom';
import ReactLogo from '../assets/react-logo.svg';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload';

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
								to='/lazypage1'
								className={({ isActive }) => (isActive ? 'nav-active' : '')}
							>
								LazyPage1
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/lazypage2'
								className={({ isActive }) => (isActive ? 'nav-active' : '')}
							>
								LazyPage2
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/lazypage3'
								className={({ isActive }) => (isActive ? 'nav-active' : '')}
							>
								LazyPage3
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route
						path='/lazypage1'
						element={<LazyPage1 />}
					/>
					<Route
						path='/lazypage2'
						element={<LazyPage2 />}
					/>
					<Route
						path='/lazypage3'
						element={<LazyPage3 />}
					/>
					<Route
						path='/*'
						element={
							<Navigate
								to='/lazypage1'
								replace
							/>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
};
