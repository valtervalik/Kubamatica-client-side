import './LoginForm.css';
const LoginForm = () => {
	return (
		<div>
			<div className='form-floating mb-3'>
				<input
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
		</div>
	);
};

export default LoginForm;
