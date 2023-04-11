import NavBar from '@/components/NavBar';

const AdminLayout = ({ children }) => {
	return (
		<div>
			<div
				style={{
					position: 'fixed',
					zIndex: -1,
					top: 0,
					width: '100%',
					height: '4.9rem',
					background: 'linear-gradient(45deg, azure 10%, #0066ff, darkblue)',
				}}></div>
			<NavBar />
			{children}
		</div>
	);
};

export default AdminLayout;
