'use client';
import React, { useContext, useState } from 'react';
import DataTable from '@/components/DataTable';
import { SpeedDialIcon } from '@mui/material';
import { AddButton } from '@/components/AddButton';
import RepairsModal from '@/components/RepairsModal';
import Tooltip from '@mui/material/Tooltip';
import MySnackbar from '@/components/MySnackBar';
import SnackBarContext from '@/context/SnackBarContext';

const Repairs = () => {
	const [openRepairs, setOpenRepairs] = useState(false);
	const handleOpenRepairs = () => setOpenRepairs(true);
	const handleCloseRepairs = () => setOpenRepairs(false);

	const { openSuccessSnack, openWarningSnack } = useContext(SnackBarContext);

	return (
		<div className='mainh1 px-5'>
			<h2 className='text-center'>Registro de Servicios de Reparación</h2>
			<div className='mb-2'>
				<p style={{ fontSize: '20px', fontWeight: 'bold', color: '#0010cc' }}>
					Enero <span>2023</span>
				</p>

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
			</div>

			<RepairsModal
				handleClose={handleCloseRepairs}
				openRepairs={openRepairs}
			/>

			<Tooltip title='Añadir Servicio'>
				<AddButton onClick={handleOpenRepairs}>
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

export default Repairs;
