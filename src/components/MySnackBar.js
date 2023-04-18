'use client';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export default function MySnackbar({
	severity,
	text,
	openWarningSnack,
	openSuccessSnack,
	openErrorSnack,
}) {
	const [openWarning, setOpenWarning] = React.useState(false);
	const [openSuccess, setOpenSuccess] = React.useState(false);
	const [openError, setOpenError] = React.useState(false);

	React.useEffect(() => {
		if (openWarningSnack) {
			setOpenWarning(true);
		} else if (openSuccessSnack) {
			setOpenSuccess(true);
		} else if (openErrorSnack) {
			setOpenError(true);
		}

		return () => {
			setOpenWarning(false);
			setOpenSuccess(false);
			setOpenError(false);
		};
	}, [openWarningSnack, openSuccessSnack, openErrorSnack]);

	const handleClick = () => {
		setOpen(true);
	};
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpenSuccess(false);
		setOpenWarning(false);
		setOpenError(false);
	};

	return (
		<Stack spacing={2} sx={{ width: '100%' }}>
			<Snackbar
				open={openWarning}
				autoHideDuration={3000}
				onClose={handleClose}>
				<Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
					{text}
				</Alert>
			</Snackbar>
			<Snackbar
				open={openSuccess}
				autoHideDuration={3000}
				onClose={handleClose}>
				<Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
					{text}
				</Alert>
			</Snackbar>
			<Snackbar open={openError} autoHideDuration={3000} onClose={handleClose}>
				<Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
					{text}
				</Alert>
			</Snackbar>
		</Stack>
	);
}
