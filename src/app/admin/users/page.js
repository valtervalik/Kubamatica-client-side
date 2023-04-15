'use client';
import React, { useContext, useEffect, useState } from 'react';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { AddButton } from '@/components/AddButton';
import User from '@/components/User';
import UserModal from '@/components/UserModal';
import Tooltip from '@mui/material/Tooltip';
import MySnackbar from '@/components/MySnackBar';
import SnackBarContext from '@/context/SnackBarContext';
import { helpHttp } from '@/helpers/helpHttp';

const Usuarios = () => {
	const [userData, setUserData] = useState([]);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const { openSuccessSnack, openWarningSnack, msg } =
		useContext(SnackBarContext);

	let url = 'http://127.0.0.1:5000/users';

	useEffect(() => {
		helpHttp()
			.get(url)
			.then((res) => {
				if (!res.err) {
					setUserData(res);
				} else {
					setUserData(null);
				}
			});
	}, [openSuccessSnack, msg, url]);

	return (
		<div>
			<h1 className='text-center mb-5 mainh1'>Administrar Usuarios</h1>
			<div className='container'>
				<div className='row align-items-start'>
					{userData.map((user, i) => (
						<div key={i} className='col mb-3 d-flex justify-content-center'>
							<User user={user} />
						</div>
					))}
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
				text={msg}
				openSuccessSnack={openSuccessSnack}
			/>
		</div>
	);
};

export default Usuarios;
