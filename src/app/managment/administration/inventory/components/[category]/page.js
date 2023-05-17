'use client';
import React, { useContext, useEffect, useState } from 'react';
import { AddButton } from '@/components/AddButton';
import ComponentNavTabs from '@/components/ComponentNavTabs';
import { SpeedDialIcon, Tooltip } from '@mui/material';
import ComponentModal from '@/components/ComponentModal';
import SnackBarContext from '@/context/SnackBarContext';
import { helpHttp } from '@/helpers/helpHttp';
import ComponentDataTable from '@/components/ComponentDataTable';
import SearchInput from '@/components/SearchInput';

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

		helpHttp()
			.get(`http://127.0.0.1:5000/components/${params.category}`)
			.then((res) => {
				if (!res.err) {
					setComponentData(res);
				} else {
					setComponentData(null);
				}
			});
	}, [openSuccessSnack, msg, params]);

	return (
		<div className='mainh1 px-5'>
			<h2 className='text-center mb-4'>Componentes de Hardware</h2>
			<div>
				<div className='d-flex justify-content-between'>
					<ComponentNavTabs categories={categoryData} />
					<SearchInput />
				</div>

				<ComponentDataTable
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
					cdata={componentData}
					params={params.category}
				/>
			</div>

			<ComponentModal
				handleClose={handleCloseComponent}
				openComponent={openComponent}
				params={params.category}
				categories={categoryData}
			/>
			<Tooltip title='Añadir Componente'>
				<AddButton onClick={handleOpenComponent}>
					<SpeedDialIcon className='d-flex align-content-center' />
				</AddButton>
			</Tooltip>
		</div>
	);
}
