import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 600,
	maxHeight: '90vh',
	overflowY: 'scroll',
	bgcolor: '#000814',
	border: '2px solid azure',
	borderRadius: '5px',
	boxShadow: '0 0 10px 2px #000814',
	p: 4,
};

export default function ConfirmDeleteComponent({
	open,
	handleClose,
	deleteComponent,
	component,
	params,
}) {
	return (
		<div>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={open}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}>
				<Fade in={open}>
					<Box sx={style}>
						<Typography
							style={{ fontWeight: 'bold', color: 'silver' }}
							align='center'
							id='transition-modal-title'
							variant='h5'
							component='h2'>
							¿Está seguro de que desea eliminar el componente con número de
							serie {component && component.serial}?
						</Typography>
						<div className='d-flex justify-content-around mt-5'>
							<Button
								className='text-danger'
								style={{ fontWeight: 'bold' }}
								onClick={handleClose}>
								Cancelar
							</Button>
							<Button
								onClick={() => deleteComponent(params, component, handleClose)}
								style={{ color: '#0066ff', fontWeight: 'bold' }}>
								Aceptar
							</Button>
						</div>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
