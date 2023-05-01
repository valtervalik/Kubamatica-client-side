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
					tdata={false}
				/>
			</div>

			<RepairsModal
				handleClose={handleCloseRepairs}
				openRepairs={openRepairs}
			/>

			<Tooltip title='Añadir Servicio'>
				<AddButton onClick={handleOpenRepairs}>
					<SpeedDialIcon className='d-flex align-content-center' />
				</AddButton>
			</Tooltip>
		</div>
	);
};

export default Repairs;
