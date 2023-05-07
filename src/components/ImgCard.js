import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './ImgCard.module.css';
import Link from 'next/link';

export default function ImgCard({ img, desc }) {
	return (
		<Card
			id={styles.imgcard}
			className='mb-3'
			sx={{
				// boxShadow: '0 0 5px 1px',
				maxWidth: 450,
				background: 'lightgray',
				height: 'fit-content',
				borderRadius: '15px',
			}}>
			<CardMedia sx={{ height: 140 }} image={img} title={desc} />
			<CardContent>
				<Typography
					sx={{ fontSize: '18px' }}
					className='text-dark text-start'
					gutterBottom
					variant='h5'
					component='div'>
					Laptop
				</Typography>
				<Typography
					className='text-dark text-start'
					variant='body2'
					color='text.secondary'>
					{desc}
				</Typography>
			</CardContent>
			<CardActions className='d-flex justify-content-between'>
				<div className='text-dark align-content-bottom'>
					<p
						style={{ padding: '4px 5px', fontSize: '16px', fontWeight: 'bold' }}
						className='m-0'>
						<span>$</span> 000
					</p>
				</div>
				<Button size='small'>
					{' '}
					<Link
						style={{ textDecoration: 'none', fontWeight: 'bold' }}
						href={'/managment/administration/inventory/laptops/details'}>
						Detalles
					</Link>
				</Button>
			</CardActions>
		</Card>
	);
}
