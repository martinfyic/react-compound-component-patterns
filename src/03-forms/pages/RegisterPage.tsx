import { useForm } from '../hooks';
import '../styles/styles.css';

interface IFormData {
	name: string;
	email: string;
	password1: string;
	password2: string;
}

export const RegisterPage = () => {
	const {
		email,
		name,
		onChangeRegister,
		onSubmit,
		password1,
		password2,
		resetForm,
		isValidEmail,
	} = useForm<IFormData>({
		name: '',
		email: '',
		password1: '',
		password2: '',
	});

	return (
		<div>
			<h1>Register Page</h1>

			<form
				noValidate
				onSubmit={onSubmit}
			>
				<input
					name='name'
					type='text'
					placeholder='Name'
					value={name}
					onChange={onChangeRegister}
					className={`${name.trim().length <= 2 && 'has-error'}`}
				/>
				{name.trim().length <= 2 && <span>This field is require*</span>}

				<input
					name='email'
					type='email'
					placeholder='Email'
					value={email}
					onChange={onChangeRegister}
					className={`${!isValidEmail(email) && 'has-error'}`}
				/>
				{!isValidEmail(email) && <span>This field is require*</span>}

				<input
					name='password1'
					type='password'
					placeholder='Password'
					value={password1}
					onChange={onChangeRegister}
				/>
				{password1.trim().length <= 0 && <span>This field is require*</span>}
				{password1.trim().length < 6 && password1.trim().length > 0 && (
					<span>Password must have more than 6 char*</span>
				)}

				<input
					name='password2'
					type='password'
					placeholder='Repeat password'
					value={password2}
					onChange={onChangeRegister}
				/>
				{password2.trim().length <= 0 && <span>This field is require*</span>}
				{password2.trim().length > 0 && password1 !== password2 && (
					<span>Password not match</span>
				)}

				<button type='submit'>Create</button>
				<button
					type='button'
					onClick={resetForm}
				>
					Reset form
				</button>
			</form>
		</div>
	);
};
