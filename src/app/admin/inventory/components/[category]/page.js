'use client';
import React, { useState } from 'react';
import { AddButton } from '@/components/AddButton';
import ComponentNavTabs from '@/components/ComponentNavTabs';
import DataTable from '@/components/DataTable';
import { SpeedDialIcon, Tooltip } from '@mui/material';
import ComponentModal from '@/components/ComponentModal';
import { useContext } from 'react';
import AdminContext from '@/context/AdminContext';

export default function CategoryPage({ params }) {
	const [openComponent, setOpenComponent] = useState(false);
	const handleOpenComponent = () => setOpenComponent(true);
	const handleCloseComponent = () => setOpenComponent(false);

	const { admin } = useContext(AdminContext);

	return (
		<div className='mainh1 px-5'>
			<div>
				<ComponentNavTabs
					categories={[
						'Baterías',
						'Cargadores',
						'Pantallas',
						'Teclados',
						'TouchPads',
						'Chasis',
						'Procesadores',
						'RAM',
						'Discos',
						'Audio',
						'Red',
						'Motherboards',
					]}
				/>
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
			{!admin && (
				<Tooltip title='Añadir Portátil'>
					<AddButton onClick={handleOpenComponent}>
						<SpeedDialIcon />
					</AddButton>
				</Tooltip>
			)}
		</div>
	);
}
