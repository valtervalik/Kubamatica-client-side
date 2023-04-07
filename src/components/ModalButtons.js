import { Button } from '@mui/material';
import React from 'react';

const ModalButtons = ({ handleClose }) => {
	return (
		<div className='d-flex justify-content-around mt-5'>
			<Button
				className='text-danger'
				style={{ fontWeight: 'bold' }}
				onClick={handleClose}>
				Cancelar
			</Button>
			<Button type='submit' style={{ color: '#0066ff', fontWeight: 'bold' }}>
				Añadir
			</Button>
		</div>
	);
};

export default ModalButtons;
