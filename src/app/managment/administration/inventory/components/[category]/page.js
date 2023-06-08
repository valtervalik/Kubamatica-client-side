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
import SessionContext from '@/context/SessionContext';

const initialForm = {
	search: '',
};

export default function CategoryPage({ params }) {
	const [openComponent, setOpenComponent] = useState(false);
	const handleOpenComponent = () => setOpenComponent(true);
	const handleCloseComponent = () => setOpenComponent(false);

	const [categoryData, setCategoryData] = useState([]);
	const [componentData, setComponentData] = useState([]);

	const [form, setForm] = useState(initialForm);

	const { openSuccessSnack, openWarningSnack, msg } =
		useContext(SnackBarContext);

	const { currentUser } = useContext(SessionContext);

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

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const handleBlur = (e) => {
		handleChange(e);
	};

	return (
		<div className='mainh1 px-5'>
			<h2 className='text-center mb-4'>Componentes de Hardware</h2>
			<div>
				<div className='d-flex justify-content-between'>
					<ComponentNavTabs
						params={params.category}
						categories={categoryData}
					/>
					<SearchInput
						value={form.search}
						handleChange={handleChange}
						handleBlur={handleBlur}
					/>
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
					role={currentUser.role}
					search={form.search}
				/>
			</div>

			<ComponentModal
				handleClose={handleCloseComponent}
				openComponent={openComponent}
				params={params.category}
				categories={categoryData}
			/>
			{currentUser.role === 'Dependiente' && (
				<Tooltip title='Añadir Componente'>
					<AddButton onClick={handleOpenComponent}>
						<SpeedDialIcon className='d-flex align-content-center' />
					</AddButton>
				</Tooltip>
			)}
		</div>
	);
}
