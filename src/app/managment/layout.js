'use client';
import Loader from '@/components/Loader';
import MySnackbar from '@/components/MySnackBar';
import SnackBarContext from '@/context/SnackBarContext';
import { useContext } from 'react';

export default function ManagmentLayout({ children }) {
	const { openSuccessSnack, openWarningSnack, openErrorSnack, msg, loading } =
		useContext(SnackBarContext);
	return (
		<>
			{children}
			<MySnackbar
				severity={'error'}
				text={msg}
				openErrorSnack={openErrorSnack}
			/>
			<MySnackbar
				severity={'success'}
				text={msg}
				openSuccessSnack={openSuccessSnack}
			/>
			<MySnackbar
				severity={'warning'}
				text={msg}
				openWarningSnack={openWarningSnack}
			/>
			{loading && <Loader />}
		</>
	);
}
