'use client';
import ChangePasswordForm from '@/components/ChangePasswordForm';
import MySnackbar from '@/components/MySnackBar';
import { useContext } from 'react';
import SnackBarContext from '@/context/SnackBarContext';

const ChangePassword = () => {
	const { openSuccessSnack, openWarningSnack } = useContext(SnackBarContext);

	return (
		<div>
			<h2 className='mb-3 d-flex justify-content-center'>Cambiar Contraseña</h2>
			<ChangePasswordForm />
			<MySnackbar
				severity={'error'}
				text={'Tiene campos incorrectos o su usuario y contraseña no existen'}
				openWarningSnack={openWarningSnack}
			/>
			<MySnackbar
				severity={'success'}
				text={'Cambio de contraseña exitoso'}
				openSuccessSnack={openSuccessSnack}
			/>
		</div>
	);
};

export default ChangePassword;
