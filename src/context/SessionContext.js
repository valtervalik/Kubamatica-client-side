'use client';
import { createContext, useState } from 'react';
import Cookies from 'js-cookie';
import forge from 'node-forge';

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
	const [key, setKey] = useState(null);
	const [iv, setIv] = useState(null);

	// Get the encrypted value of the currentUser cookie
	const encrypted = Cookies.get('currentUser');

	// Decrypt the value of the currentUser cookie
	let currentUser = null;
	if (encrypted && key && iv) {
		const decipher = forge.cipher.createDecipher('AES-CBC', key);
		decipher.start({ iv: iv });
		decipher.update(forge.util.createBuffer(encrypted));
		decipher.finish();
		currentUser = JSON.parse(decipher.output.getBytes());
	}

	const data = {
		key,
		setKey,
		iv,
		setIv,
		currentUser,
	};

	return (
		<SessionContext.Provider value={data}>{children}</SessionContext.Provider>
	);
};

export default SessionContext;
export { SessionProvider };
