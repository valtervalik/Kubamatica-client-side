'use client';
import React, { useContext, useState } from 'react';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { AddButton } from '@/components/AddButton';
import User from '@/components/User';
import UserModal from '@/components/UserModal';
import Tooltip from '@mui/material/Tooltip';
import MySnackbar from '@/components/MySnackBar';
import SnackBarContext from '@/context/SnackBarContext';

const Usuarios = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const { openSuccessSnack, openWarningSnack } = useContext(SnackBarContext);

	return (
		<div>
			<h1 className='text-center mb-5 mainh1'>Administrar Usuarios</h1>
			<div className='container'>
				<div className='row align-items-start'>
					<div className='col mb-3 d-flex justify-content-center'>
						<User />
					</div>

					<div className='col mb-3 d-flex justify-content-center'>
						<User />
					</div>

					<div className='col mb-3 d-flex justify-content-center'>
						<User />
					</div>
				</div>
			</div>

			<UserModal handleClose={handleClose} open={open} />

			<Tooltip title='Añadir Usuario'>
				<AddButton onClick={handleOpen}>
					<SpeedDialIcon />
				</AddButton>
			</Tooltip>
			<MySnackbar
				severity={'warning'}
				text={'Por favor rellene el formulario correctamente'}
				openWarningSnack={openWarningSnack}
			/>
			<MySnackbar
				severity={'success'}
				text={'Usuario añadido exitosamente'}
				openSuccessSnack={openSuccessSnack}
			/>
		</div>
	);
};

export default Usuarios;
