import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { MyCheckBox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstract = () => {
	return (
		<div>
			<h1>Formik Abstract </h1>
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
						<MyTextInput
							label='First Name'
							name='firstName'
							placeholder='Martin'
						/>
						<MyTextInput
							label='Last Name'
							name='lastName'
							placeholder='Ferreira'
						/>
						<MyTextInput
							label='Email'
							name='email'
							type='email'
							placeholder='jondoe@google.com'
						/>

						<MySelect
							label='Job Type'
							name='jobType'
						>
							<option value=''>Pick something</option>
							<option value='front-developer'>Frontend Developer</option>
							<option value='back-developer'>Backend Developer</option>
							<option value='designer'>Designer</option>
							<option value='full-stack'>Full Stack Developer</option>
						</MySelect>

						<MyCheckBox
							label='Terms & Conditions'
							name='terms'
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
