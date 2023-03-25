import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './ImgCard.module.css';

export default function ImgCard({ img, desc }) {
	return (
		<Card
			id={styles.imgcard}
			className='mb-3'
			sx={{
				maxWidth: 450,
				backgroundColor: '#000814',
				height: 'fit-content',
				borderRadius: '15px',
			}}>
			<CardMedia sx={{ height: 140 }} image={img} title={desc} />
			<CardContent>
				<Typography
					sx={{ fontSize: '18px' }}
					className='text-light text-start'
					gutterBottom
					variant='h5'
					component='div'>
					Laptop
				</Typography>
				<Typography
					className='text-light text-start'
					variant='body2'
					color='text.secondary'>
					{desc}
				</Typography>
			</CardContent>
			<CardActions className='d-flex justify-content-between'>
				<div className='text-light align-content-bottom'>
					<p style={{ padding: '4px 5px', fontSize: '13px' }} className='m-0'>
						<span>$</span> 000
					</p>
				</div>
				<Button size='small'>Detalles</Button>
			</CardActions>
		</Card>
	);
}
