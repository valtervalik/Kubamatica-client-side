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

export default function User({ user }) {
	const url = `http://127.0.0.1:5000/users/${user._id}`;

	const { setOpenSuccessSnack, setMsg } = React.useContext(SnackBarContext);

	const deleteUser = async () => {
		await helpHttp()
			.del(url)
			.then((res) => setMsg(res.message));

		setOpenSuccessSnack(true);
		setTimeout(() => {
			setOpenSuccessSnack(false);
			setMsg('');
		}, 3000);
	};

	return (
		<Box sx={{ minWidth: 275, maxWidth: 350, width: 350 }}>
			<React.Fragment>
				<div
					id={styles.usercard}
					style={{ background: '#000814', borderRadius: '5px' }}>
					<CardContent variant='outlined'>
						<Typography
							className='mb-3'
							sx={{
								fontSize: 20,
								color: 'azure',
								fontWeight: 'bold',
							}}
							color='text.secondary'
							gutterBottom>
							{user.fullname}
						</Typography>
						<div className='d-flex justify-content-between'>
							<div>
								<Typography
									sx={{ fontSize: 17, color: 'azure' }}
									variant='h5'
									component='div'>
									{user.username}
								</Typography>
								<Typography sx={{ color: 'silver' }} color='text.secondary'>
									{user.email}
								</Typography>
							</div>
							<div>
								<Typography
									sx={{ fontSize: 17, color: 'azure' }}
									variant='h5'
									component='div'>
									{user.role}
								</Typography>
								<Typography sx={{ color: 'silver' }} color='text.secondary'>
									TEL: {user.phone}
								</Typography>
							</div>
						</div>
					</CardContent>

					<CardActions className='d-flex justify-content-end'>
						<Button className='btn text-primary border-0'>Editar</Button>
						<Button onClick={deleteUser} className='btn text-danger border-0'>
							Eliminar
						</Button>
					</CardActions>
				</div>
			</React.Fragment>
		</Box>
	);
}
