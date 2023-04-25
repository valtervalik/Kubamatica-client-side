import Link from 'next/link';
import styles from './ComponentNavTabs.module.css';

const ComponentNavTabs = ({ categories }) => {
	return (
		<div id={styles.compnavtab}>
			{categories.map((category) => (
				<Link
					className={`me-3 ${styles.compnavtab}`}
					href={`/admin/inventory/components/${category.category.toLowerCase()}`}
					key={category._id}>
					{category.category[0].toUpperCase() + category.category.substring(1)}
				</Link>
			))}
		</div>
	);
};

export default ComponentNavTabs;
