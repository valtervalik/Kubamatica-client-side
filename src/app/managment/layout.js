'use client';
import MySnackbar from '@/components/MySnackBar';
import SnackBarContext from '@/context/SnackBarContext';
import { useContext } from 'react';

export default function ManagmentLayout({ children }) {
	const { openSuccessSnack, openWarningSnack, openErrorSnack, msg } =
		useContext(SnackBarContext);
	return (
		<>
			{children}
			<MySnackbar
				severity={'error'}
				text={msg}
				openWarningSnack={openErrorSnack}
			/>
			<MySnackbar
				severity={'success'}
				text={msg}
				openSuccessSnack={openSuccessSnack}
			/>
			<MySnackbar
				severity={'warning'}
				text={msg}
				openSuccessSnack={openWarningSnack}
			/>
		</>
	);
}
