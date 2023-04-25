'use client';
import React, { useContext, useEffect, useState } from 'react';
import { AddButton } from '@/components/AddButton';
import ComponentNavTabs from '@/components/ComponentNavTabs';
import DataTable from '@/components/DataTable';
import { SpeedDialIcon, Tooltip } from '@mui/material';
import ComponentModal from '@/components/ComponentModal';
import MySnackbar from '@/components/MySnackBar';
import SnackBarContext from '@/context/SnackBarContext';
import { helpHttp } from '@/helpers/helpHttp';

export default function CategoryPage({ params }) {
	const [openComponent, setOpenComponent] = useState(false);
	const handleOpenComponent = () => setOpenComponent(true);
	const handleCloseComponent = () => setOpenComponent(false);

	const [categoryData, setCategoryData] = useState([]);
	const [componentData, setComponentData] = useState([]);

	const { openSuccessSnack, openWarningSnack, msg } =
		useContext(SnackBarContext);

	useEffect(() => {
		helpHttp()
			.get('http://127.0.0.1:5000/categories')
			.then((res) => {
				if (!res.err) {
					setCategoryData(res);
				} else {
					setCategoryData(null);
				}
			});
	}, [openSuccessSnack, msg]);

	return (
		<div className='mainh1 px-5'>
			<h2 className='text-center mb-4'>Componentes de Hardware</h2>
			<div>
				<ComponentNavTabs categories={categoryData} />
				<DataTable
					crud={true}
					maxHeight={420}
					columns={[
						'No.',
						'Caja',
						'Marca',
						'Modelo',
						'No. Serie',
						'Estado',
						'Propiedades',
						'Precio',
					]}
					tdata={[
						'6',
						'Asus ROG',
						'SW-83817',
						'YjsY4568SUTSUh5d5s',
						'Nuevo',
						'Descripción de las propiedades',
						'$ 000 cup',
					]}
				/>
			</div>

			<ComponentModal
				handleClose={handleCloseComponent}
				openComponent={openComponent}
				params={params.category}
			/>
			<Tooltip title='Añadir Portátil'>
				<AddButton onClick={handleOpenComponent}>
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
				text={'Componente añadido exitosamente'}
				openSuccessSnack={openSuccessSnack}
			/>
		</div>
	);
}
