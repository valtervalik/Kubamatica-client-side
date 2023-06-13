'use client';
import Link from 'next/link';
import { FormError } from './FormError';
import { usePasswordForm } from '@/hooks/usePasswordForm';

const initialForm = {
	username: '',
	password: '',
	newpassword: '',
	confirmpassword: '',
};

const validateForm = (form) => {
	let error = {};
	let regexPassword =
		/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!|%/*?&])[A-Za-z\d@$/!%|*?&]{8,}$/;

	if (!form.username.trim()) {
		error.username = `El campo 'Usuario' es requerido`;
	}

	if (!form.password.trim()) {
		error.password = `El campo 'Contraseña' es requerido`;
	}

	if (!form.newpassword.trim()) {
		error.newpassword = `El campo 'Nueva Contraseña' es requerido`;
	} else if (form.newpassword.trim() === form.password.trim()) {
		error.newpassword = `La nueva contraseña debe ser diferente a la antigua contraseña`;
	} else if (!regexPassword.test(form.newpassword.trim())) {
		error.newpassword = `El campo 'Nueva Contraseña' debe tener más de 8 caracteres y tener al menos una mayúscula, un número y un caracter especial`;
	}

	if (!form.confirmpassword.trim()) {
		error.confirmpassword = `El campo 'Confirmar Contraseña' es requerido`;
	} else if (form.newpassword !== form.confirmpassword) {
		error.confirmpassword = `Las contraseñas no coinciden`;
	}
	return error;
};

const url = 'http://127.0.0.1:5000/users/changepassword';

const ChangePasswordForm = () => {
	const { form, error, handleChange, handleBlur, handleSubmit } =
		usePasswordForm(initialForm, validateForm, url);

	return (
		<form
			onSubmit={handleSubmit}
			className='w-50'
			action='/session/login'
			noValidate>
			<div className='form-floating pb-3'>
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
					autoFocus
				/>
				<label htmlFor='floatingInput'>Usuario</label>
			</div>
			<div className='form-floating pb-3'>
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
			<div className='form-floating pb-3'>
				<input
					value={form.newpassword}
					onChange={handleChange}
					onBlur={handleBlur}
					type='password'
					name='newpassword'
					className='form-control border-2 input'
					id='floatingP'
					placeholder='New Password'
					required
					minLength={8}
				/>
				{form.password && error.newpassword && (
					<FormError style={{ fontWeight: 'bold' }}>
						{error.newpassword}
					</FormError>
				)}
				<label htmlFor='floatingInput'>Nueva Contraseña</label>
			</div>
			<div className='form-floating pb-3'>
				<input
					value={form.confirmpassword}
					onChange={handleChange}
					onBlur={handleBlur}
					type='password'
					name='confirmpassword'
					className='form-control border-2 input'
					id='floatingPa'
					placeholder='Password'
					required
					minLength={8}
				/>
				{!error.newpassword && error.confirmpassword && (
					<FormError style={{ fontWeight: 'bold' }}>
						{error.confirmpassword}
					</FormError>
				)}
				<label htmlFor='floatingPassword'>Confirmar Contraseña</label>
			</div>
			<div className='d-flex justify-content-between pb-3'>
				<Link href='/managment/session/login' className='btn cancel'>
					Cancelar
				</Link>

				<input type='submit' value='Confirmar' className='btn confirm' />
			</div>
		</form>
	);
};

export default ChangePasswordForm;
