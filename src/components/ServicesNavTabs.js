import Link from 'next/link';
import styles from './NavTabs.module.css';

const ServicesNavTabs = () => {
	return (
		<div>
			<div id={styles.navtabs}>
				<Link
					className={`me-3 ${styles.navtabs}`}
					href={'/admin/services/repairs'}>
					Reparaciones
				</Link>
				<Link
					className={`me-3 ${styles.navtabs}`}
					href={'/admin/services/sells'}>
					Ventas
				</Link>
				<Link
					className={`me-3 ${styles.navtabs}`}
					href={'/admin/services/purchases'}>
					Compras
				</Link>
			</div>
		</div>
	);
};

export default ServicesNavTabs;
