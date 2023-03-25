import Link from 'next/link';
import './NavTabs.css';

const ServicesNavTabs = () => {
	return (
		<div>
			<div id='navtabs'>
				<Link className={`me-3 navtabs`} href={'/admin/services/repairs'}>
					Reparaciones
				</Link>
				<Link className={`me-3 navtabs`} href={'/admin/services/sells'}>
					Ventas
				</Link>
				<Link className={`me-3 navtabs`} href={'/admin/services/purchases'}>
					Compras
				</Link>
			</div>
		</div>
	);
};

export default ServicesNavTabs;
