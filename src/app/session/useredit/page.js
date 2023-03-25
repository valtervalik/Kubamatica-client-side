import Link from 'next/link';
import ChangePasswordForm from '../../../components/ChangePasswordForm';
import LoginForm from '../../../components/LoginForm';

const ChangePassword = () => {
	return (
		<div>
			<h2 className='mb-3 d-flex justify-content-center'>Cambiar Contraseña</h2>
			<div className='d-flex justify-content-center'>
				<form className='w-50' action='/session/login'>
					<LoginForm />
					<ChangePasswordForm />
					<div className='d-flex justify-content-between mb-5'>
						<Link href='/session/login' className='btn cancel'>
							Cancelar
						</Link>

						<input type='submit' value='Confirmar' className='btn confirm' />
					</div>
				</form>
			</div>
		</div>
	);
};

export default ChangePassword;
