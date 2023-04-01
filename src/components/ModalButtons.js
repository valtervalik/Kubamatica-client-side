import { Button } from '@mui/material';
import React from 'react';

const ModalButtons = ({ handleClose }) => {
	return (
		<div className='d-flex justify-content-around mt-3'>
			<Button className='text-danger' onClick={handleClose}>
				Cancelar
			</Button>
			<Button type='submit' style={{ color: '#0066cc' }}>
				Añadir
			</Button>
		</div>
	);
};

export default ModalButtons;
