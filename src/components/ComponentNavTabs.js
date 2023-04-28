import Link from 'next/link';
import styles from './ComponentNavTabs.module.css';

const ComponentNavTabs = ({ categories }) => {
	return (
		<div id={styles.compnavtab}>
			{categories &&
				categories.map((category) => (
					<Link
						className={`me-3 ${styles.compnavtab}`}
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
