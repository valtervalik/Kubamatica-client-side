import { SnackBarProvider } from '@/context/SnackBarContext';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export const metadata = {
	title: 'Kubamática',
	description: 'Taller de reparación de laptop',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<SnackBarProvider>{children}</SnackBarProvider>
			</body>
		</html>
	);
}
