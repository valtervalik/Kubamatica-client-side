'use client';
import React, { useState } from 'react';
import { SpeedDialIcon } from '@mui/material';
import { AddButton } from '../../../../components/AddButton';
import DataTable from '../../../../components/DataTable';
import Tooltip from '@mui/material/Tooltip';
import SellsModal from '../../../../components/SellsModal';

const Sells = () => {
	const [openSells, setOpenSells] = useState(false);
	const handleOpenSells = () => setOpenSells(true);
	const handleCloseSells = () => setOpenSells(false);

	return (
		<div className='mainh1 px-5'>
			<div className='text-center mb-3'>
				<h1>Enero</h1>
				<h5>2023</h5>
			</div>
			<DataTable
				columns={[
					'No.',
					'Cliente',
					'Teléfono',
					'Técnico',
					'Marca',
					'Modelo',
					'No. Serie',
					'Categoría',
					'Estado',
					'Propiedades',
					'Fecha',
					'Precio',
					'Garantía',
				]}
				tdata={[
					'Nombre y Apellidos',
					'54789685',
					'Nombre y Apellidos',
					'Asus ROG',
					'SW-83817',
					'YjsY4568SUTSUh5d5s',
					'Batería',
					'Nuevo',
					'Descripción de las propiedades',
					'Jue - 1',
					'$ 000 cup',
					'30 Días',
				]}
			/>
			<SellsModal handleClose={handleCloseSells} openSells={openSells} />
			<Tooltip title='Añadir Servicio'>
				<AddButton onClick={handleOpenSells}>
					<SpeedDialIcon />
				</AddButton>
			</Tooltip>
		</div>
	);
};

export default Sells;
