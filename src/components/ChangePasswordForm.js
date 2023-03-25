const ChangePasswordForm = () => {
	return (
		<div>
			<div className='form-floating mb-3'>
				<input
					type='password'
					name='newpassword'
					className='form-control border-2 input'
					id='floatingP'
					placeholder='New Password'
					required
					minLength={8}
				/>
				<label htmlFor='floatingInput'>Nueva Contraseña</label>
			</div>
			<div className='form-floating mb-3'>
				<input
					type='password'
					name='confirmpassword'
					className='form-control border-2 input'
					id='floatingPa'
					placeholder='Password'
					required
					minLength={8}
				/>
				<label htmlFor='floatingPassword'>Confirmar Contraseña</label>
			</div>
		</div>
	);
};

export default ChangePasswordForm;
