'use client';
import React, { useContext, useEffect, useState } from 'react';
import { SpeedDialIcon } from '@mui/material';
import { AddButton } from '@/components/AddButton';
import RepairsModal from '@/components/RepairsModal';
import Tooltip from '@mui/material/Tooltip';
import SnackBarContext from '@/context/SnackBarContext';
import { helpHttp } from '@/helpers/helpHttp';
import RepairDataTable from '@/components/RepairDataTable';

const Repairs = () => {
	const [openRepairs, setOpenRepairs] = useState(false);
	const handleOpenRepairs = () => setOpenRepairs(true);
	const handleCloseRepairs = () => setOpenRepairs(false);

	const [repairData, setRepairData] = useState([]);

	const { openSuccessSnack, openWarningSnack, msg } =
		useContext(SnackBarContext);

	useEffect(() => {
		helpHttp()
			.get(`http://127.0.0.1:5000/repairs`)
			.then((res) => {
				if (!res.err) {
					setRepairData(res);
				} else {
					setRepairData(null);
				}
			});
	}, [openSuccessSnack, msg]);

	return (
		<div className='mainh1 px-5'>
			<h2 className='text-center'>Registro de Servicios de Reparación</h2>
			<div className='mb-2'>
				<p style={{ fontSize: '20px', fontWeight: 'bold', color: '#0010cc' }}>
					Enero <span>2023</span>
				</p>

				<RepairDataTable
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
					rdata={repairData}
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
