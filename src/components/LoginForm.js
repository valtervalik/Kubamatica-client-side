'use client';
import Link from 'next/link';
import LoginBtn from './LoginBtn';
import './LoginForm.css';
import { useSessionForm } from '@/hooks/useSessionForm';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Button } from '@mui/material';

const initialForm = {
	username: '',
	password: '',
};

const url = 'http://127.0.0.1:5000/users/login';

const LoginForm = () => {
	const { form, handleChange, handleBlur, handleSubmit } = useSessionForm(
		initialForm,
		url
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
					<div className='d-flex justify-content-between align-items-top'>
						<Button
							style={{ fontSize: '12px', height: '40px' }}
							className='text-light'>
							¿Ha olvidado su contraseña?
						</Button>
						<LoginBtn />
					</div>
					<Link
						href='/managment/session/changepassword'
						className='btn button-link'>
						Cambiar Contraseña <LockOpenIcon fontSize='small' />
					</Link>
				</form>
			</div>
		</>
	);
};

export default LoginForm;
