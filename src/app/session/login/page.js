'use client';
import LoginForm from '@/components/LoginForm';
import MySnackbar from '@/components/MySnackBar';
import SnackBarContext from '@/context/SnackBarContext';
import { useContext } from 'react';

const Login = () => {
	const { openSuccessSnack, openWarningSnack } = useContext(SnackBarContext);

	return (
		<div>
			<h2 className='d-flex justify-content-center mb-3'>Inicio de Sesión</h2>
			<LoginForm />
			<MySnackbar
				severity={'error'}
				text={'Nombre de usuario o contraseña incorrectos'}
				openWarningSnack={openWarningSnack}
			/>
			<MySnackbar
				severity={'success'}
				text={'Inicio de sesión exitoso'}
				openSuccessSnack={openSuccessSnack}
			/>
		</div>
	);
};
export default Login;
