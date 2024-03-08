import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register Formik Page</h1>
			<hr />

			<Formik
				initialValues={{
					name: '',
					email: '',
					password1: '',
					password2: '',
				}}
				onSubmit={values => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.min(2, 'Must be 3 characters')
						.max(15, 'Must be 15 characters or less')
						.required('Required'),
					email: Yup.string()
						.email('Invalid email address')
						.required('Required'),
					password1: Yup.string()
						.min(6, 'Must be 6 characters')
						.required('Required'),
					password2: Yup.string()
						.oneOf([Yup.ref('password1')], 'Passwords do not match')
						.required('Required'),
				})}
			>
				{formik => (
					<Form>
						<MyTextInput
							label='Nombre'
							name='name'
							placeholder='Jon'
						/>
						<MyTextInput
							label='Email'
							name='email'
							placeholder='jondoe@example.com'
						/>
						<MyTextInput
							label='Password'
							name='password1'
						/>
						<MyTextInput
							label='Repeat Password'
							name='password2'
						/>

						<button type='submit'>Submit</button>
						<button
							type='reset'
							onClick={formik.handleReset}
						>
							Reset
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
