import Link from 'next/link';
import LoginBtn from '../../../components/LoginBtn';
import LoginForm from '../../../components/LoginForm';

const Login = () => {
	return (
		<div>
			<h2 className='d-flex justify-content-center mb-3'>Inicio de Sesión</h2>
			<div className='d-flex justify-content-center'>
				<form className='w-50' action='/admin/services/repairs'>
					<LoginForm />
					<LoginBtn />
					<Link href='/session/changepassword' className='btn button-link'>
						Cambiar Contraseña
					</Link>
				</form>
			</div>
		</div>
	);
};
export default Login;
