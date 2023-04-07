'use client';
import { createContext, useState } from 'react';

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
	const [admin, setAdmin] = useState(false);

	const handleChange = (e) => {
		setAdmin(e.target.checked);
	};

	const data = { admin, handleChange };
	return <AdminContext.Provider value={data}>{children}</AdminContext.Provider>;
};

export default AdminContext;
export { AdminProvider };
