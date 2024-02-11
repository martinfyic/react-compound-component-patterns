import {
	BrowserRouter,
	Route,
	Routes,
	NavLink,
	Navigate,
} from 'react-router-dom';
import {
	RegisterPage,
	FormikBasicPage,
	FormikYupPage,
	FormikComponents,
	FormikAbstract,
} from '../03-forms/pages';
import ReactLogo from '../assets/react-logo.svg';

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
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/register'
								className={({ isActive }) => (isActive ? 'nav-active' : '')}
							>
								Register
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formik-basic'
								className={({ isActive }) => (isActive ? 'nav-active' : '')}
							>
								Formik Basic
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formik-yup'
								className={({ isActive }) => (isActive ? 'nav-active' : '')}
							>
								Formik Yup
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formik-components'
								className={({ isActive }) => (isActive ? 'nav-active' : '')}
							>
								Formik Components
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formik-abstract'
								className={({ isActive }) => (isActive ? 'nav-active' : '')}
							>
								Formik Abstract
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route
						path='/register'
						element={<RegisterPage />}
					/>
					<Route
						path='/formik-yup'
						element={<FormikYupPage />}
					/>
					<Route
						path='/formik-basic'
						element={<FormikBasicPage />}
					/>
					<Route
						path='/formik-components'
						element={<FormikComponents />}
					/>
					<Route
						path='/formik-abstract'
						element={<FormikAbstract />}
					/>
					<Route
						path='/'
						element={<h1>Home</h1>}
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
