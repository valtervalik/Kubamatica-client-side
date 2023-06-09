'use client';
import React, { useContext, useEffect, useState } from 'react';
import { SpeedDialIcon } from '@mui/material';
import { AddButton } from '@/components/AddButton';
import CategoryCard from '@/components/CategoryCard';
import Tooltip from '@mui/material/Tooltip';
import CategoryModal from '@/components/CategoryModal';
import SnackBarContext from '@/context/SnackBarContext';
import { helpHttp } from '@/helpers/helpHttp';
import styles from './page.module.css';

const Components = () => {
	const [openCategory, setOpenCategory] = useState(false);
	const [categoryData, setCategoryData] = useState([]);
	const handleOpenCategory = () => setOpenCategory(true);
	const handleCloseCategory = () => setOpenCategory(false);

	const { openSuccessSnack, msg } = useContext(SnackBarContext);

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
		<div>
			<div className={`container mb-5 mainh1 ${styles.grid}`}>
				{categoryData &&
					categoryData.map((category, i) => (
						<div key={i}>
							<CategoryCard category={category} />
						</div>
					))}
			</div>

			<CategoryModal
				handleClose={handleCloseCategory}
				openCategory={openCategory}
			/>
			<Tooltip title='Añadir Categoría'>
				<AddButton onClick={handleOpenCategory}>
					<SpeedDialIcon className='d-flex align-content-center' />
				</AddButton>
			</Tooltip>
		</div>
	);
};

export default Components;
