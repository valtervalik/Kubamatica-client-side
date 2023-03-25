import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import TextInput from './TextInput';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '500px',
	maxHeight: '90vh',
	overflowY: 'scroll',
	bgcolor: '#000814',
	border: '2px solid azure',
	borderRadius: '5px',
	boxShadow: '0 0 10px 2px #000814',
	p: 4,
};

export default function CategoryModal({ openCategory, handleCloseCategory }) {
	return (
		<div>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={openCategory}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}>
				<Fade in={openCategory}>
					<Box sx={style}>
						<Typography
							style={{ fontWeight: 'bold', color: 'silver' }}
							align='center'
							id='transition-modal-title'
							variant='h5'
							component='h2'>
							Añadir Categoría de Componente
						</Typography>
						<div className='mt-3'>
							<form action='/admin/inventory/components'>
								<div className='d-flex justify-content-center'>
									<TextInput label='Nueva Categoría' name='category' />
								</div>
								<div className='d-flex justify-content-around mt-3'>
									<Button className='text-danger' onClick={handleCloseCategory}>
										Cancelar
									</Button>
									<Button type='submit' style={{ color: '#080DFB' }}>
										Añadir
									</Button>
								</div>
							</form>
						</div>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
