import Link from 'next/link';
import styles from './ComponentNavTabs.module.css';

const ComponentNavTabs = ({ categories, params }) => {
	return (
		<div id={styles.compnavtab}>
			{categories &&
				categories
					.sort((a, b) => a.category.localeCompare(b.category))
					.map((category) => (
						<Link
							className={`me-3 ${styles.compnavtab} ${
								params === category.category && styles.active
							}`}
							href={`/managment/administration/inventory/components/${category.category}`}
							key={category._id}>
							{category.category[0].toUpperCase() +
								category.category.substring(1)}
						</Link>
					))}
		</div>
	);
};

export default ComponentNavTabs;
