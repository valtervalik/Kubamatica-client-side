'use client';
import React, { useContext, useEffect, useState } from 'react';
import SellDataTable from '@/components/SellDataTable';
import SnackBarContext from '@/context/SnackBarContext';
import { helpHttp } from '@/helpers/helpHttp';

const Sells = () => {
	const [sellData, setSellData] = useState([]);

	const { openSuccessSnack, openWarningSnack, msg } =
		useContext(SnackBarContext);

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
				<p style={{ fontSize: '20px', fontWeight: 'bold', color: '#0010cc' }}>
					Enero <span>2023</span>
				</p>
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
				/>
			</div>
		</div>
	);
};

export default Sells;
