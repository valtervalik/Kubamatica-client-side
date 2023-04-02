'use client';
import { Button } from '@mui/material';
import styles from './LaptopDetailsButtons.module.css';

const LaptopDetailsButtons = () => {
	return (
		<div id={styles.buttonbox} className='d-flex justify-content-around w-25'>
			<Button className={` text-success ${styles.button}`}>Vender</Button>
			<Button className={` text-primary ${styles.button}`}>Editar</Button>
			<Button className={` text-danger ${styles.button}`}>Eliminar</Button>
		</div>
	);
};

export default LaptopDetailsButtons;
