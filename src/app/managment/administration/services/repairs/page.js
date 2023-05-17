'use client';
import { useContext, useEffect, useState } from 'react';
import { Button, SpeedDialIcon } from '@mui/material';
import { AddButton } from '@/components/AddButton';
import RepairsModal from '@/components/RepairsModal';
import Tooltip from '@mui/material/Tooltip';
import SnackBarContext from '@/context/SnackBarContext';
import { helpHttp } from '@/helpers/helpHttp';
import RepairDataTable from '@/components/RepairDataTable';
import dayjs from 'dayjs';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Repairs = () => {
	const [openRepairs, setOpenRepairs] = useState(false);
	const handleOpenRepairs = () => setOpenRepairs(true);
	const handleCloseRepairs = () => setOpenRepairs(false);

	const [repairData, setRepairData] = useState([]);
	const [month, setMonth] = useState(dayjs().$M);
	const [year, setYear] = useState(dayjs().$y);

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

	const months = [
		'Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Agosto',
		'Septiembre',
		'Octubre',
		'Noviembre',
		'Diciembre',
	];

	const handleMonthChange = (change) => {
		let newMonth = month + change;
		if (newMonth < 0) {
			newMonth = 11;
			setYear(year - 1);
		} else if (newMonth > 11) {
			newMonth = 0;
			setYear(year + 1);
		}
		setMonth(newMonth);
	};

	return (
		<div className='mainh1 px-5'>
			<h2 className='text-center'>Registro de Servicios de Reparación</h2>
			<div className='mb-2'>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Button onClick={() => handleMonthChange(-1)}>
						<ArrowLeftIcon />
					</Button>
					<p
						style={{
							fontSize: '20px',
							fontWeight: 'bold',
							color: '#0010cc',
							margin: '2px 10px',
						}}>
						{months[month]}{' '}
						<Button onClick={() => handleMonthChange(1)}>
							<ArrowRightIcon />
						</Button>
					</p>
					<p
						style={{
							fontSize: '20px',
							fontWeight: 'bold',
							color: '#0010cc',
							margin: '2px 10px',
						}}
						className='d-flex align-items-center'>
						<span className='pb-1'>{year} </span>
						<span className='d-flex flex-column-reverse'>
							<Button
								style={{ height: '20px' }}
								onClick={() => setYear(year - 1)}>
								<ArrowDropDownIcon />
							</Button>
							<Button
								style={{ height: '20px' }}
								onClick={() => setYear(year + 1)}>
								<ArrowDropUpIcon />
							</Button>
						</span>
					</p>
				</div>

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
