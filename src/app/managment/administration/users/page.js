'use client';
import React, { useContext, useEffect, useState } from 'react';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { AddButton } from '@/components/AddButton';
import User from '@/components/User';
import UserModal from '@/components/UserModal';
import Tooltip from '@mui/material/Tooltip';
import SnackBarContext from '@/context/SnackBarContext';
import { helpHttp } from '@/helpers/helpHttp';
import styles from './page.module.css';

const Usuarios = () => {
	const [userData, setUserData] = useState([]);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const { openSuccessSnack, msg } = useContext(SnackBarContext);

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
			<h1 className='text-center mb-3 mainh1'>Administrar Usuarios</h1>
			<div className={`container ${styles.grid}`}>
				{userData &&
					userData.map((user, i) => (
						<div key={i} className='mb-4'>
							<User user={user} />
						</div>
					))}
			</div>

			<UserModal handleClose={handleClose} open={open} />

			<Tooltip title='Añadir Usuario'>
				<AddButton onClick={handleOpen}>
					<SpeedDialIcon className='d-flex align-content-center' />
				</AddButton>
			</Tooltip>
		</div>
	);
};

export default Usuarios;
