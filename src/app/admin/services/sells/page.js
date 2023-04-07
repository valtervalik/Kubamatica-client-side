'use client';
import React, { useContext, useState } from 'react';
import { SpeedDialIcon } from '@mui/material';
import { AddButton } from '@/components/AddButton';
import DataTable from '@/components/DataTable';
import Tooltip from '@mui/material/Tooltip';
import SellsModal from '@/components/SellsModal';
import MySnackbar from '@/components/MySnackBar';
import SnackBarContext from '@/context/SnackBarContext';

const Sells = () => {
	const [openSells, setOpenSells] = useState(false);
	const handleOpenSells = () => setOpenSells(true);
	const handleCloseSells = () => setOpenSells(false);

	const { openSuccessSnack, openWarningSnack } = useContext(SnackBarContext);

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
			</div>
			<SellsModal handleClose={handleCloseSells} openSells={openSells} />

			<Tooltip title='Añadir Servicio'>
				<AddButton onClick={handleOpenSells}>
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

export default Sells;
