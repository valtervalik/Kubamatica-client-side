import ChangePasswordForm from '@/components/ChangePasswordForm';

const ChangePassword = () => {
	return (
		<>
			<h2 className='pb-3 d-flex justify-content-center text-light'>
				Cambiar Contraseña
			</h2>
			<div className='d-flex justify-content-center'>
				<ChangePasswordForm />
			</div>
		</>
	);
};

export default ChangePassword;
