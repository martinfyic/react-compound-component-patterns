import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import formJson from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
	initialValues[input.name] = input.value;

	if (!input.validations) continue;

	let schema = Yup.string();

	for (const rule of input.validations) {
		if (rule.type === 'required') {
			schema = schema.required('Este campo es requerido');
		}

		if (rule.type === 'minLength') {
			schema = schema.min(
				(rule as any).value || 3,
				`Mínimo de ${(rule as any).value || 3} caracteres`
			);
		}

		if (rule.type === 'email') {
			schema = schema.email('Este campo debe de ser un email valido');
		}

		// ... otras reglas
	}

	requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
	return (
		<div>
			<h1>DynamicFormPage</h1>
			<hr />

			<Formik
				validationSchema={validationSchema}
				initialValues={initialValues}
				onSubmit={value => console.log(value)}
			>
				{formik => (
					<Form noValidate>
						{formJson.map(
							({ label, name, placeHolder, inputType, type, options }) => {
								if (type === 'input') {
									return (
										<MyTextInput
											key={label}
											label={label}
											name={name}
											placeholder={placeHolder}
											type={inputType as any}
										/>
									);
								} else if (type === 'select') {
									return (
										<MySelect
											key={label}
											label={label}
											name={name}
										>
											<option value=''>Elije una opción</option>
											{options?.map(({ id, label }) => (
												<option
													key={id}
													value={id}
												>
													{label}
												</option>
											))}
										</MySelect>
									);
								}

								throw new Error(`El typo: ${type} no es soportado`);
							}
						)}
						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
