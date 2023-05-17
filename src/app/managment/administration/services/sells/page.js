'use client';
import React, { useContext, useEffect, useState } from 'react';
import SellDataTable from '@/components/SellDataTable';
import SnackBarContext from '@/context/SnackBarContext';
import { helpHttp } from '@/helpers/helpHttp';
import dayjs from 'dayjs';
import DateFilter from '@/components/DateFilter';
import SessionContext from '@/context/SessionContext';

const Sells = () => {
	const [sellData, setSellData] = useState([]);

	const [month, setMonth] = useState(dayjs().$M);
	const [year, setYear] = useState(dayjs().$y);

	const { openSuccessSnack, openWarningSnack, msg } =
		useContext(SnackBarContext);

	const { currentUser } = useContext(SessionContext);

	useEffect(() => {
		helpHttp()
			.get(`http://127.0.0.1:5000/sells`)
			.then((res) => {
				if (!res.err) {
					setSellData(res);
				} else {
					setSellData(null);
				}
			});
	}, [openSuccessSnack, msg]);

	return (
		<div className='mainh1 px-5'>
			<h2 className='text-center'>Registro de Servicios de Venta</h2>
			<div className='mb-2'>
				<DateFilter
					month={month}
					year={year}
					setMonth={setMonth}
					setYear={setYear}
				/>

				<SellDataTable
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
					sdata={sellData}
					month={month}
					year={year}
					role={currentUser.role}
				/>
			</div>
		</div>
	);
};

export default Sells;
