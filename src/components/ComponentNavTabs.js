import Link from 'next/link';
import styles from './ComponentNavTabs.module.css';

const ComponentNavTabs = ({ categories }) => {
	return (
		<div id={styles.compnavtab}>
			{categories.map((el, i) => (
				<Link
					className={`me-3 ${styles.compnavtab}`}
					href={`/admin/inventory/components/${el.toLowerCase()}`}
					key={i}>
					{el}
				</Link>
			))}
		</div>
	);
};

export default ComponentNavTabs;
