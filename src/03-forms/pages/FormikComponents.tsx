import { Form, Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {
	return (
		<div>
			<h1>Formik Components </h1>
			<hr />

			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					terms: false,
					jobType: '',
				}}
				onSubmit={values => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.required('Required')
						.max(15, 'Must be 15 characters or less'),
					lastName: Yup.string()
						.required('Required')
						.max(20, 'Must be 15 characters or less'),
					email: Yup.string()
						.email('Invalid email address')
						.required('Required'),
					terms: Yup.boolean().oneOf([true], 'Must be accept terms'),
					jobType: Yup.string()
						.required('Required')
						.notOneOf([''], 'Must select one'),
				})}
			>
				{formik => (
					<Form>
						<label htmlFor='firstName'>First Name</label>
						<Field
							name='firstName'
							type='text'
						/>
						<ErrorMessage
							name='firstName'
							component='span'
						/>

						<label htmlFor='lastName'>Last Name</label>
						<Field
							name='lastName'
							type='text'
						/>
						<ErrorMessage
							name='lastName'
							component='span'
						/>

						<label htmlFor='email'>Email</label>
						<Field
							name='email'
							type='email'
						/>
						<ErrorMessage
							name='email'
							component='span'
						/>

						<label>
							<Field
								name='terms'
								type='checkbox'
							/>
							Terms and conditions
						</label>
						<ErrorMessage
							name='terms'
							component='span'
						/>

						<label htmlFor='jobType'>Job Type</label>
						<Field
							name='jobType'
							as='select'
						>
							<option value=''>Pick something</option>
							<option value='front-developer'>Frontend Developer</option>
							<option value='back-developer'>Backend Developer</option>
							<option value='designer'>Designer</option>
							<option value='full-stack'>Full Stack Developer</option>
						</Field>
						<ErrorMessage
							name='jobType'
							component='span'
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
