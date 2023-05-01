'use client';
import React, { useState } from 'react';
import { SpeedDialIcon } from '@mui/material';
import { AddButton } from '@/components/AddButton';
import DataTable from '@/components/DataTable';
import Tooltip from '@mui/material/Tooltip';
import SellsModal from '@/components/SellsModal';

const Sells = () => {
	const [openSells, setOpenSells] = useState(false);
	const handleOpenSells = () => setOpenSells(true);
	const handleCloseSells = () => setOpenSells(false);

	return (
		<div className='mainh1 px-5'>
			<h2 className='text-center'>Registro de Servicios de Venta</h2>
			<div className='mb-2'>
				<p style={{ fontSize: '20px', fontWeight: 'bold', color: '#0010cc' }}>
					Enero <span>2023</span>
				</p>
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
					tdata={false}
				/>
			</div>
			<SellsModal handleClose={handleCloseSells} openSells={openSells} />

			<Tooltip title='Añadir Servicio'>
				<AddButton onClick={handleOpenSells}>
					<SpeedDialIcon className='d-flex align-content-center' />
				</AddButton>
			</Tooltip>
		</div>
	);
};

export default Sells;
