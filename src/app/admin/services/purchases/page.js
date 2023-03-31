'use client';
import React, { useState } from 'react';
import { SpeedDialIcon } from '@mui/material';
import { AddButton } from '@/components/AddButton';
import DataTable from '@/components/DataTable';
import Tooltip from '@mui/material/Tooltip';
import PurchasesModal from '@/components/PurchasesModal';

const Purchases = () => {
	const [openPurchases, setOpenPurchases] = useState(false);
	const handleOpenPurchases = () => setOpenPurchases(true);
	const handleClosePurchases = () => setOpenPurchases(false);

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
					'Proveedor',
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
					'6',
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
			<PurchasesModal
				handleClosePurchases={handleClosePurchases}
				openPurchases={openPurchases}
			/>
			<Tooltip title='Añadir Servicio'>
				<AddButton onClick={handleOpenPurchases}>
					<SpeedDialIcon />
				</AddButton>
			</Tooltip>
		</div>
	);
};

export default Purchases;
