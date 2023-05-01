'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './User.module.css';
import { helpHttp } from '@/helpers/helpHttp';
import SnackBarContext from '@/context/SnackBarContext';
import ConfirmDeleteUserModal from './ConfirmDeleteUserModal';
import EditUserModal from './EditUserModal';

export default function User({ user }) {
	const [openDelete, setOpenDelete] = React.useState(false);
	const handleOpenDelete = () => setOpenDelete(true);
	const handleCloseDelete = () => setOpenDelete(false);

	const [openEdit, setOpenEdit] = React.useState(false);
	const handleOpenEdit = () => setOpenEdit(true);
	const handleCloseEdit = () => setOpenEdit(false);

	const url = `http://127.0.0.1:5000/users/${user._id}`;

	const { setOpenSuccessSnack, setMsg } = React.useContext(SnackBarContext);

	const deleteUser = async () => {
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
		<Box sx={{ minWidth: 275, maxWidth: 350, width: 350 }}>
			<React.Fragment>
				<div
					id={styles.usercard}
					style={{
						background: 'white',
						boxShadow: '0 0 5px 1px',
						borderRadius: '5px',
					}}>
					<CardContent variant='outlined'>
						<Typography
							className='mb-3 text-dark'
							sx={{
								fontSize: 20,
								fontWeight: 'bold',
							}}
							color='text.secondary'
							gutterBottom>
							{user.fullname}
						</Typography>
						<div className='d-flex justify-content-between'>
							<div>
								<Typography
									className='text-dark'
									sx={{ fontSize: 17, color: 'azure' }}
									variant='h5'
									component='div'>
									{user.username}
								</Typography>
								<Typography sx={{ color: 'gray' }} color='text.secondary'>
									{user.email}
								</Typography>
							</div>
							<div>
								<Typography
									className='text-dark'
									sx={{ fontSize: 17, color: 'azure' }}
									variant='h5'
									component='div'>
									{user.role}
								</Typography>
								<Typography sx={{ color: 'gray' }} color='text.secondary'>
									TEL: {user.phone}
								</Typography>
							</div>
						</div>
					</CardContent>

					<CardActions className='d-flex justify-content-end'>
						<Button
							style={{ fontWeight: 'bold' }}
							onClick={handleOpenEdit}
							className='btn text-primary border-0'>
							Editar
						</Button>
						<Button
							style={{ fontWeight: 'bold' }}
							onClick={handleOpenDelete}
							className='btn text-danger border-0'>
							Eliminar
						</Button>
					</CardActions>
				</div>
			</React.Fragment>
			<ConfirmDeleteUserModal
				handleClose={handleCloseDelete}
				open={openDelete}
				deleteUser={deleteUser}
				username={user.username}
			/>
			<EditUserModal
				user={user}
				handleClose={handleCloseEdit}
				open={openEdit}
			/>
		</Box>
	);
}
