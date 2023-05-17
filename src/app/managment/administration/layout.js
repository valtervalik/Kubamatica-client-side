'use client';
import NavBar from '@/components/NavBar';
import SessionContext from '@/context/SessionContext';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';

const AdminLayout = ({ children }) => {
	const router = useRouter();
	const { currentUser } = useContext(SessionContext);

	useEffect(() => {
		if (!currentUser) {
			router.push('/managment/session/login');
		}
	}, [currentUser, router]);

	if (currentUser) {
		return (
			<div>
				{/* <div
				style={{
					position: 'fixed',
					zIndex: -1,
					top: 0,
					width: '100%',
					height: '4.9rem',
					background: 'linear-gradient(45deg, azure 10%, #0066ff, darkblue)',
				}}></div> */}
				<NavBar />
				{children}
			</div>
		);
	} else {
		return <p>Unauthorized</p>;
	}
};

export default AdminLayout;
