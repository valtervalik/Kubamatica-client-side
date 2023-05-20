'use client';
import { createContext, useState } from 'react';

const SnackBarContext = createContext();

const SnackBarProvider = ({ children }) => {
	const [openWarningSnack, setOpenWarningSnack] = useState(false);
	const [openSuccessSnack, setOpenSuccessSnack] = useState(false);
	const [openErrorSnack, setOpenErrorSnack] = useState(false);
	const [loading, setLoading] = useState(false);
	const [msg, setMsg] = useState('');

	const data = {
		openWarningSnack,
		openSuccessSnack,
		openErrorSnack,
		setOpenErrorSnack,
		setOpenSuccessSnack,
		setOpenWarningSnack,
		msg,
		setMsg,
		loading,
		setLoading,
	};
	return (
		<SnackBarContext.Provider value={data}>{children}</SnackBarContext.Provider>
	);
};

export default SnackBarContext;
export { SnackBarProvider };
