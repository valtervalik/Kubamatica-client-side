'use client';
import React, { useState } from 'react';
import DataTable from '@/components/DataTable';
import { SpeedDialIcon } from '@mui/material';
import { AddButton } from '@/components/AddButton';
import RepairsModal from '@/components/RepairsModal';
import Tooltip from '@mui/material/Tooltip';

const Repairs = () => {
	const [openRepairs, setOpenRepairs] = useState(false);
	const handleOpenRepairs = () => setOpenRepairs(true);
	const handleCloseRepairs = () => setOpenRepairs(false);

	return (
		<div className='mainh1 px-5'>
			<div className='text-center mb-3'>
				<h1>Enero</h1>
				<h5>2023</h5>
			</div>
			<DataTable
				columns={[
					'No.',
					'Caja',
					'Cliente',
					'Teléfono',
					'Técnico',
					'Equipo',
					'Descripción',
					'Fecha',
					'Precio',
					'Garantía',
				]}
				tdata={[
					'1',
					'Nombre y Apellidos',
					'54789685',
					'Nombre y Apellidos',
					'Asus ROG',
					'Revision',
					'Jue - 1',
					'$ 000 cup',
					'30 Días',
				]}
			/>
			<RepairsModal
				handleClose={handleCloseRepairs}
				openRepairs={openRepairs}
			/>
			<Tooltip title='Añadir Servicio'>
				<AddButton onClick={handleOpenRepairs}>
					<SpeedDialIcon />
				</AddButton>
			</Tooltip>
		</div>
	);
};

export default Repairs;
