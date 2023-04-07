'use client';
import React, { useContext, useState } from 'react';
import { SpeedDialIcon } from '@mui/material';
import { AddButton } from '@/components/AddButton';
import CategoryCard from '@/components/CategoryCard';
import Tooltip from '@mui/material/Tooltip';
import CategoryModal from '@/components/CategoryModal';
import MySnackbar from '@/components/MySnackBar';
import SnackBarContext from '@/context/SnackBarContext';

const Components = () => {
	const [openCategory, setOpenCategory] = useState(false);
	const handleOpenCategory = () => setOpenCategory(true);
	const handleCloseCategory = () => setOpenCategory(false);

	const { openSuccessSnack, openWarningSnack } = useContext(SnackBarContext);

	return (
		<div>
			<div className='container mb-5 mainh1'>
				<div className='row'>
					<div className='col'>
						<CategoryCard category='Baterías' />

						<CategoryCard category='Cargadores' />

						<CategoryCard category='Pantallas' />

						<CategoryCard category='Teclados' />
					</div>
					<div className='col'>
						<CategoryCard category='TouchPads' />

						<CategoryCard category='Chasis' />

						<CategoryCard category='Procesadores' />

						<CategoryCard category='RAM' />
					</div>
					<div className='col'>
						<CategoryCard category='Discos' />

						<CategoryCard category='Audio' />

						<CategoryCard category='Red' />

						<CategoryCard category='Placas Base' />
					</div>
				</div>
			</div>

			<CategoryModal
				handleClose={handleCloseCategory}
				openCategory={openCategory}
			/>
			<Tooltip title='Añadir Categoría'>
				<AddButton onClick={handleOpenCategory}>
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
				text={'Categoría añadida exitosamente'}
				openSuccessSnack={openSuccessSnack}
			/>
		</div>
	);
};

export default Components;
