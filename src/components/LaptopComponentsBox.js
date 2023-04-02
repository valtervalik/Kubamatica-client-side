import styles from './LaptopComponentsBox.module.css';

const LaptopComponentsBox = () => {
	return (
		<div id={styles.box}>
			<ul className='pt-3'>
				<li>
					<p>HDD 500 GB</p>
				</li>
				<li>
					<p>RAM 8 GB</p>
				</li>
				<li>
					<p>Cargador Lenovo 19.5 V / 4.7 A</p>
				</li>
				<li>
					<p>Pantalla 15.6 Standard</p>
				</li>
			</ul>
			<div id={styles.sn}>
				<p>No. Caja 5</p>
				<p>S/N: GSJSJYT653656365SK</p>
			</div>
		</div>
	);
};

export default LaptopComponentsBox;
