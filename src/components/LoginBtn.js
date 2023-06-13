const LoginBtn = ({ disabled }) => {
	return (
		<div className='d-flex justify-content-end mb-3 '>
			<input
				type='submit'
				value='Iniciar Sesión'
				className='btn login-button text-light'
				id='sesionBtn'
				disabled={disabled}
			/>
		</div>
	);
};

export default LoginBtn;
