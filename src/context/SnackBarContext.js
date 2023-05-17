'use client';
import Cookies from 'js-cookie';
import { createContext, useState } from 'react';

const SnackBarContext = createContext();

const SnackBarProvider = ({ children }) => {
	const [openWarningSnack, setOpenWarningSnack] = useState(false);
	const [openSuccessSnack, setOpenSuccessSnack] = useState(false);
	const [openErrorSnack, setOpenErrorSnack] = useState(false);
	const [msg, setMsg] = useState('');
	const [currentUser, setCurrentUser] = useState(Cookies.get('currentUser'));

	const data = {
		openWarningSnack,
		openSuccessSnack,
		openErrorSnack,
		setOpenErrorSnack,
		setOpenSuccessSnack,
		setOpenWarningSnack,
		msg,
		setMsg,
		currentUser,
	};
	return (
		<SnackBarContext.Provider value={data}>{children}</SnackBarContext.Provider>
	);
};

export default SnackBarContext;
export { SnackBarProvider };
