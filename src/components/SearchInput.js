import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from './SearchInput.module.css';

export default function SearchInput({ value, handleChange, handleBlur }) {
	return (
		<>
			<div className={styles.search}>
				<input
					type='search'
					name='search'
					value={value}
					onChange={handleChange}
					onBlur={handleBlur}
					placeholder='Buscar…'
					autoComplete='disabled'
				/>
				<SearchIcon />
			</div>
		</>
	);
}
