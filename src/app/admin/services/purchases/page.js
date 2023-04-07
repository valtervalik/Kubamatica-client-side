'use client';
import React, { useContext, useState } from 'react';
import { SpeedDialIcon } from '@mui/material';
import { AddButton } from '@/components/AddButton';
import DataTable from '@/components/DataTable';
import Tooltip from '@mui/material/Tooltip';
import PurchasesModal from '@/components/PurchasesModal';
import MySnackbar from '@/components/MySnackBar';
import SnackBarContext from '@/context/SnackBarContext';

const Purchases = () => {
	const [openPurchases, setOpenPurchases] = useState(false);
	const handleOpenPurchases = () => setOpenPurchases(true);
	const handleClosePurchases = () => setOpenPurchases(false);

	const { openSuccessSnack, openWarningSnack } = useContext(SnackBarContext);

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
			<Tooltip title='Añadir Servicio'>
				<AddButton onClick={handleOpenPurchases}>
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
				text={'Servicio añadido exitosamente'}
				openSuccessSnack={openSuccessSnack}
			/>
		</div>
	);
};

export default Purchases;
