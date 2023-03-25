import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const card = (
	<React.Fragment>
		<CardContent>
			<Typography
				sx={{ fontSize: 25, color: 'azure' }}
				color='text.secondary'
				gutterBottom>
				Nombre y Apellidos
			</Typography>
			<Typography sx={{ fontSize: 20 }} variant='h5' component='div'>
				usuario
			</Typography>
			<Typography sx={{ mb: 1.5, color: 'azure' }} color='text.secondary'>
				email@email.com
			</Typography>
			<Typography variant='body2'>
				Dependiente
				<br />
				{'TEL: 59764532'}
			</Typography>
		</CardContent>
		<CardActions className='d-flex justify-content-end'>
			<Button size='small' className='btn text-primary border-0'>
				Editar
			</Button>
			<Button size='small' className='text-danger'>
				Eliminar
			</Button>
		</CardActions>
	</React.Fragment>
);

export default function User() {
	return (
		<Box sx={{ minWidth: 275, maxWidth: 350, width: 350 }}>
			<Card
				sx={{
					backgroundColor: '#000814',
					color: 'azure',
				}}
				variant='outlined'>
				{card}
			</Card>
		</Box>
	);
}
