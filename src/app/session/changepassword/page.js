'use client';
import ChangePasswordForm from '@/components/ChangePasswordForm';
import MySnackbar from '@/components/MySnackBar';
import { useContext } from 'react';
import SnackBarContext from '@/context/SnackBarContext';

const ChangePassword = () => {
	const { openSuccessSnack, openWarningSnack } = useContext(SnackBarContext);

	return (
		<>
			<h2 className='pb-3 d-flex justify-content-center text-light'>
				Cambiar Contraseña
			</h2>
			<div className='d-flex justify-content-center'>
				<ChangePasswordForm />
			</div>
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
		</>
	);
};

export default ChangePassword;
