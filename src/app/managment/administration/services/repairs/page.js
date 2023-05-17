'use client';
import { useContext, useEffect, useState } from 'react';
import { SpeedDialIcon } from '@mui/material';
import { AddButton } from '@/components/AddButton';
import RepairsModal from '@/components/RepairsModal';
import Tooltip from '@mui/material/Tooltip';
import SnackBarContext from '@/context/SnackBarContext';
import { helpHttp } from '@/helpers/helpHttp';
import RepairDataTable from '@/components/RepairDataTable';
import dayjs from 'dayjs';
import DateFilter from '@/components/DateFilter';
import SessionContext from '@/context/SessionContext';
import { useRouter } from 'next/navigation';

const Repairs = () => {
	const [openRepairs, setOpenRepairs] = useState(false);
	const handleOpenRepairs = () => setOpenRepairs(true);
	const handleCloseRepairs = () => setOpenRepairs(false);

	const [repairData, setRepairData] = useState([]);
	const [month, setMonth] = useState(dayjs().$M);
	const [year, setYear] = useState(dayjs().$y);

	const router = useRouter();

	const { openSuccessSnack, openWarningSnack, msg } =
		useContext(SnackBarContext);

	const { currentUser } = useContext(SessionContext);

	useEffect(() => {
		if (!currentUser) {
			router.push('/managment/session/login');
		}

		helpHttp()
			.get(`http://127.0.0.1:5000/repairs`)
			.then((res) => {
				if (!res.err) {
					setRepairData(res);
				} else {
					setRepairData(null);
				}
			});
	}, [openSuccessSnack, msg, currentUser, router]);

	if (currentUser) {
		return (
			<div className='mainh1 px-5'>
				<h2 className='text-center'>Registro de Servicios de Reparación</h2>
				<div className='mb-2'>
					<DateFilter
						month={month}
						year={year}
						setMonth={setMonth}
						setYear={setYear}
					/>

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
						month={month}
						year={year}
						role={currentUser.role}
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
	} else {
		return null;
	}
};

export default Repairs;
