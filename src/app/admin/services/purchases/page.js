'use client';
import React, { useState } from 'react';
import { SpeedDialIcon } from '@mui/material';
import { AddButton } from '@/components/AddButton';
import DataTable from '@/components/DataTable';
import Tooltip from '@mui/material/Tooltip';
import PurchasesModal from '@/components/PurchasesModal';
import { useContext } from 'react';
import AdminContext from '@/context/AdminContext';

const Purchases = () => {
	const [openPurchases, setOpenPurchases] = useState(false);
	const handleOpenPurchases = () => setOpenPurchases(true);
	const handleClosePurchases = () => setOpenPurchases(false);

	const { admin } = useContext(AdminContext);

	return (
		<div className='mainh1 px-5'>
			<h2 className='text-center'>Registro de Compras</h2>
			<div className='mb-2'>
				<p style={{ fontSize: '20px', fontWeight: 'bold', color: '#0010cc' }}>
					Enero <span>2023</span>
				</p>
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
			</div>
			<PurchasesModal
				handleClose={handleClosePurchases}
				openPurchases={openPurchases}
			/>
			{!admin && (
				<Tooltip title='Añadir Servicio'>
					<AddButton onClick={handleOpenPurchases}>
						<SpeedDialIcon />
					</AddButton>
				</Tooltip>
			)}
		</div>
	);
};

export default Purchases;
