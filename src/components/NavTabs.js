import Link from 'next/link';
import './NavTabs.css';

const NavTabs = () => {
	return (
		<div id='navtabs'>
			<Link className={`me-3 navtabs`} href={'/admin/inventory/laptops'}>
				Portátiles
			</Link>
			<Link className={`me-3 navtabs`} href={'/admin/inventory/components'}>
				Componentes
			</Link>
		</div>
	);
};

export default NavTabs;
