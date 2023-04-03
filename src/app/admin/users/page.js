'use client';
import React, { useState } from 'react';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { AddButton } from '../../../components/AddButton';
import User from '../../../components/User';
import UserModal from '../../../components/UserModal';
import Tooltip from '@mui/material/Tooltip';
import { useContext } from 'react';
import AdminContext from '@/context/AdminContext';

const Usuarios = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const { admin } = useContext(AdminContext);

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
			{!admin && (
				<Tooltip title='Añadir Usuario'>
					<AddButton onClick={handleOpen}>
						<SpeedDialIcon />
					</AddButton>
				</Tooltip>
			)}
		</div>
	);
};

export default Usuarios;
