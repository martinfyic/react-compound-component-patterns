import { ErrorMessage, useField } from 'formik';

interface Props {
	label: string;
	name: string;
	type?: 'text' | 'email' | 'password' | 'checkbox';
	placeholder?: string;
	[x: string]: unknown;
}

export const MyTextInput = ({ label, ...props }: Props) => {
	// const [field, meta] = useField(props);
	const [field] = useField(props);

	return (
		<>
			<label
				htmlFor={props.name}
				id={props.name}
			>
				{label}
			</label>
			<input
				className='text-input'
				{...field}
				{...props}
			/>
			<ErrorMessage
				name={props.name}
				component='span'
				className='clase-para-ErrorMessage'
			/>

			{/* Utilizando los meta */}
			{/* {meta.touched && meta.error && (
				<span className='error'>{meta.error}</span>
			)} */}
		</>
	);
};
