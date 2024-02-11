import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikYupPage = () => {
	/*
	 *
	 *	utilizando getFieldProps no necesito handleBlur, handleChange y values, ya que se incluyen cuando desestructuro getFieldProps
	 *	Ejemplo: {...getFieldProps('firstName')} en el input
	 *	https://formik.org/docs/tutorial#getfieldprops
	 *	Yup ==> https://www.npmjs.com/package/yup
	 *
	 */

	const { errors, getFieldProps, handleReset, handleSubmit, touched } =
		useFormik({
			initialValues: { firstName: '', lastName: '', email: '' },
			onSubmit: value => {
				console.log(value);
			},
			validationSchema: Yup.object({
				firstName: Yup.string()
					.required('Required')
					.max(15, 'Must be 15 characters or less'),
				lastName: Yup.string()
					.required('Required')
					.max(20, 'Must be 15 characters or less'),
				email: Yup.string().email('Invalid email address').required('Required'),
			}),
		});

	return (
		<div>
			<h1>Formik Yup Tutorial </h1>
			<hr />

			<form
				noValidate
				onSubmit={handleSubmit}
			>
				<label htmlFor='firstName'>First Name</label>
				<input
					type='text'
					id='firstName'
					{...getFieldProps('firstName')}
				/>
				{touched.firstName && errors.firstName && (
					<span>{errors.firstName}</span>
				)}

				<label htmlFor='lastName'>Last Name</label>
				<input
					type='text'
					id='lastName'
					{...getFieldProps('lastName')}
				/>
				{touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

				<label htmlFor='email'>Email</label>
				<input
					type='email'
					id='email'
					{...getFieldProps('email')}
				/>
				{touched.email && errors.email && <span>{errors.email}</span>}

				<button type='submit'>Submit</button>
				<button
					type='reset'
					onClick={handleReset}
				>
					Reset
				</button>
			</form>
		</div>
	);
};
