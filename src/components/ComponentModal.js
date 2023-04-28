import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import AddComponentForm from './AddComponentForm';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 1000,
	maxHeight: '90vh',
	overflowY: 'scroll',
	bgcolor: '#000814',
	border: '2px solid azure',
	borderRadius: '5px',
	boxShadow: '0 0 10px 2px #000814',
	p: 4,
};

export default function ComponentModal({
	openComponent,
	handleClose,
	params,
	categories,
}) {
	return (
		<div>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={openComponent}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}>
				<Fade in={openComponent}>
					<Box sx={style}>
						<Typography
							style={{ fontWeight: 'bold', color: 'silver' }}
							align='center'
							id='transition-modal-title'
							variant='h5'
							component='h2'>
							Añadir a{' '}
							{(params.slice(0, 1).toUpperCase() + params.slice(1))
								.replace('%20', ' ')
								.replace('%C3%A1', 'á')
								.replace('%C3%A9', 'é')
								.replace('%C3%AD', 'í')
								.replace('%C3%B3', 'ó')
								.replace('%C3%BA', 'ú')}
						</Typography>
						<div className='mt-3'>
							<AddComponentForm
								params={params}
								categories={categories}
								handleClose={handleClose}
							/>
						</div>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
