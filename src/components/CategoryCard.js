import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './CategoryCard.module.css';

export default function CategoryCard({ category }) {
	return (
		<Card
			id={styles.categorycard}
			className='mb-3'
			sx={{
				minWidth: 275,
				maxWidth: 350,
				backgroundColor: '#000814',
			}}>
			<CardContent>
				<Typography
					className='text-light text-center'
					variant='h5'
					component='div'>
					{category}
				</Typography>
			</CardContent>
			<CardActions className='d-flex justify-content-around'>
				<Button className='btn text-primary' size='small'>
					Editar
				</Button>
				<Button className='btn text-danger' size='small'>
					Eliminar
				</Button>
			</CardActions>
		</Card>
	);
}
