'use client';
import React, { useState } from 'react';
import { SpeedDialIcon } from '@mui/material';
import { AddButton } from '@/components/AddButton';
import DataTable from '@/components/ComponentDataTable';
import Tooltip from '@mui/material/Tooltip';
import PurchasesModal from '@/components/PurchasesModal';

const Purchases = () => {
	const [openPurchases, setOpenPurchases] = useState(false);
	const handleOpenPurchases = () => setOpenPurchases(true);
	const handleClosePurchases = () => setOpenPurchases(false);

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
					tdata={false}
				/>
			</div>
			<PurchasesModal
				handleClose={handleClosePurchases}
				openPurchases={openPurchases}
			/>
			<Tooltip title='Añadir Servicio'>
				<AddButton onClick={handleOpenPurchases}>
					<SpeedDialIcon className='d-flex align-content-center' />
				</AddButton>
			</Tooltip>
		</div>
	);
};

export default Purchases;
