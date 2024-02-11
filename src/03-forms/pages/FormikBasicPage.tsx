import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

interface FormValue {
	firstName: string;
	lastName: string;
	email: string;
}

export const FormikBasicPage = () => {
	const validate = ({ email, firstName, lastName }: FormValue) => {
		const errors: FormikErrors<FormValue> = {};

		if (!firstName.trim()) {
			errors.firstName = 'Required';
		} else if (firstName.length >= 15) {
			errors.firstName = 'Must be 15 characters or less';
		}

		if (!lastName.trim()) {
			errors.lastName = 'Required';
		} else if (lastName.length >= 25) {
			errors.lastName = 'Must be 15 characters or less';
		}

		if (!email) {
			errors.email = 'Required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
			errors.email = 'Invalid email address';
		}

		return errors;
	};

	const {
		errors,
		handleBlur,
		handleChange,
		handleReset,
		handleSubmit,
		touched,
		values,
	} = useFormik({
		initialValues: { firstName: '', lastName: '', email: '' },
		onSubmit: value => {
			console.log(value);
		},
		validate,
	});

	return (
		<div>
			<h1>Formik Basic Tutorial </h1>
			<hr />

			<form
				noValidate
				onSubmit={handleSubmit}
			>
				<label htmlFor='firstName'>First Name</label>
				<input
					type='text'
					name='firstName'
					id='firstName'
					onChange={handleChange}
					value={values.firstName}
					onBlur={handleBlur}
				/>
				{touched.firstName && errors.firstName && (
					<span>{errors.firstName}</span>
				)}

				<label htmlFor='lastName'>Last Name</label>
				<input
					type='text'
					name='lastName'
					id='lastName'
					onChange={handleChange}
					value={values.lastName}
					onBlur={handleBlur}
				/>
				{touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

				<label htmlFor='email'>Email</label>
				<input
					type='email'
					name='email'
					id='email'
					onChange={handleChange}
					value={values.email}
					onBlur={handleBlur}
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
