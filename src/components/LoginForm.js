'use client';
import Link from 'next/link';
import LoginBtn from './LoginBtn';
import './LoginForm.css';
import { useForm } from '@/hooks/useForm';

const initialForm = {
	username: '',
	password: '',
};

const validateForm = (form) => {
	let error = {};

	if (form.username !== 'valtervar') {
		error.username = true;
	}

	if (form.password !== 'PWISW2402*') {
		error.password = true;
	}

	return error;
};

const LoginForm = () => {
	const { form, handleChange, handleBlur, handleSubmit } = useForm(
		initialForm,
		validateForm
	);

	return (
		<>
			<div className='d-flex justify-content-center'>
				<form
					onSubmit={handleSubmit}
					className='w-50'
					action='/admin/services/repairs'>
					<div className='form-floating mb-3'>
						<input
							value={form.username}
							onChange={handleChange}
							onBlur={handleBlur}
							type='text'
							name='username'
							className='form-control border-2 input'
							id='floatingInput'
							placeholder='name@example.com'
							required
							minLength={2}
						/>
						<label htmlFor='floatingInput'>Usuario</label>
					</div>
					<div className='form-floating mb-3'>
						<input
							value={form.password}
							onChange={handleChange}
							onBlur={handleBlur}
							type='password'
							name='password'
							className={`form-control border-2 input`}
							id='floatingPassword'
							placeholder='Password'
							required
							minLength={8}
						/>
						<label htmlFor='floatingPassword'>Contraseña</label>
					</div>
					<LoginBtn />
					<Link href='/session/changepassword' className='btn button-link'>
						Cambiar Contraseña
					</Link>
				</form>
			</div>
		</>
	);
};

export default LoginForm;
