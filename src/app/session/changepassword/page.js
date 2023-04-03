import Link from 'next/link';
import ChangePasswordForm from '@/components/ChangePasswordForm';
import LoginForm from '@/components/LoginForm';

const ChangePassword = () => {
	return (
		<div>
			<h2 className='mb-3 d-flex justify-content-center'>Cambiar Contraseña</h2>
			<ChangePasswordForm />
		</div>
	);
};

export default ChangePassword;
