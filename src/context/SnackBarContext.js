'use client';
import { createContext, useState } from 'react';

const SnackBarContext = createContext();

const SnackBarProvider = ({ children }) => {
	const [openWarningSnack, setOpenWarningSnack] = useState(false);
	const [openSuccessSnack, setOpenSuccessSnack] = useState(false);
	const [msg, setMsg] = useState('');

	const data = {
		openWarningSnack,
		openSuccessSnack,
		setOpenSuccessSnack,
		setOpenWarningSnack,
		msg,
		setMsg,
	};
	return (
		<SnackBarContext.Provider value={data}>{children}</SnackBarContext.Provider>
	);
};

export default SnackBarContext;
export { SnackBarProvider };