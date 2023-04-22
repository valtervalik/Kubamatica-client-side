'use client';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './CategoryCard.module.css';
import Link from 'next/link';
import ConfirmDeleteCategory from './ConfirmDeleteCategory';
import SnackBarContext from '@/context/SnackBarContext';
import { helpHttp } from '@/helpers/helpHttp';
import EditCategoryModal from './EditCategoryModal';

export default function CategoryCard({ category }) {
	const [openDelete, setOpenDelete] = React.useState(false);
	const handleOpenDelete = () => setOpenDelete(true);
	const handleCloseDelete = () => setOpenDelete(false);

	const [openEdit, setOpenEdit] = React.useState(false);
	const handleOpenEdit = () => setOpenEdit(true);
	const handleCloseEdit = () => setOpenEdit(false);

	const url = `http://127.0.0.1:5000/categories/${category._id}`;

	const { setOpenSuccessSnack, setMsg } = React.useContext(SnackBarContext);

	const deleteCategory = async () => {
		await helpHttp()
			.del(url)
			.then((res) => {
				setMsg(res.message);
				setOpenSuccessSnack(true);
			});

		setTimeout(() => {
			setOpenSuccessSnack(false);
			setMsg('');
		}, 3000);

		handleCloseDelete();
	};

	return (
		<Card
			id={styles.categorycard}
			className='mb-3'
			sx={{
				minWidth: 275,
				maxWidth: 350,
				background: `#000814`,
			}}>
			<Link
				style={{ textDecoration: 'none' }}
				href={`/managment/administration/inventory/components/${category.category.toLowerCase()}`}>
				<CardContent>
					<Typography
						className='text-light text-center'
						variant='h5'
						component='div'>
						{category.category[0].toUpperCase() +
							category.category.substring(1)}
					</Typography>
				</CardContent>
			</Link>
			<CardActions className='d-flex justify-content-around'>
				<Button
					onClick={handleOpenEdit}
					className='btn text-primary'
					size='small'>
					Editar
				</Button>
				<Button
					onClick={handleOpenDelete}
					className='btn text-danger'
					size='small'>
					Eliminar
				</Button>
			</CardActions>
			<ConfirmDeleteCategory
				deleteCategory={deleteCategory}
				open={openDelete}
				category={category}
				handleClose={handleCloseDelete}
			/>
			<EditCategoryModal
				category={category}
				openCategory={openEdit}
				handleClose={handleCloseEdit}
			/>
		</Card>
	);
}
