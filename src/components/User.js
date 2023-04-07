import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './User.module.css';

export default function User() {
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
							Nombre y Apellidos
						</Typography>
						<div className='d-flex justify-content-between'>
							<div>
								<Typography
									sx={{ fontSize: 17, color: 'azure' }}
									variant='h5'
									component='div'>
									usuario
								</Typography>
								<Typography sx={{ color: 'silver' }} color='text.secondary'>
									email@email.com
								</Typography>
							</div>
							<div>
								<Typography
									sx={{ fontSize: 17, color: 'azure' }}
									variant='h5'
									component='div'>
									Dependiente
								</Typography>
								<Typography sx={{ color: 'silver' }} color='text.secondary'>
									TEL: 59764532
								</Typography>
							</div>
						</div>
					</CardContent>

					<CardActions className='d-flex justify-content-end'>
						<Button className='btn text-primary border-0'>Editar</Button>
						<Button className='btn text-danger border-0'>Eliminar</Button>
					</CardActions>
				</div>
			</React.Fragment>
		</Box>
	);
}
