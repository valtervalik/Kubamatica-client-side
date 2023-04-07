import NavBar from '@/components/NavBar';
import { AdminProvider } from '@/context/AdminContext';

const AdminLayout = ({ children }) => {
	return (
		<AdminProvider>
			<div>
				{/* <svg
				style={{ position: 'fixed', top: '-230px' }}
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 -30 1200 320'>
				<path
					fill='#000814'
					fillOpacity='2'
					d='M0,256L80,261.3C160,267,320,277,480,272C640,267,800,245,960,213.3C1120,181,1280,139,1360,117.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'></path>
			</svg> */}
				<div
					style={{
						position: 'fixed',
						zIndex: -1,
						top: 0,
						width: '100%',
						height: '4.9rem',
						background: 'linear-gradient(45deg, white 10%, skyblue, blue)',
					}}></div>
				<NavBar />
				{children}
			</div>
		</AdminProvider>
	);
};

export default AdminLayout;
