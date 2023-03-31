import Link from 'next/link';
import styles from './NavTabs.module.css';

const NavTabs = () => {
	return (
		<div id={styles.navtabs}>
			<Link
				className={`me-3 ${styles.navtabs}`}
				href={'/admin/inventory/laptops'}>
				Portátiles
			</Link>
			<Link
				className={`me-3 ${styles.navtabs}`}
				href={'/admin/inventory/components'}>
				Componentes
			</Link>
		</div>
	);
};

export default NavTabs;
