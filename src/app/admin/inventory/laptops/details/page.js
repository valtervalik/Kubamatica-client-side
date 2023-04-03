'use client';
import LaptopCarousel from '@/components/LaptopCarousel';
import React from 'react';
import styles from './page.module.css';
import LaptopDetailsButtons from '@/components/LaptopDetailsButtons';
import LaptopComponentsBox from '@/components/LaptopComponentsBox';
import { useContext } from 'react';
import AdminContext from '@/context/AdminContext';

const LaptopDetailsPage = () => {
	const { admin } = useContext(AdminContext);

	return (
		<div className='mb-5 mainh1'>
			<div className='d-flex justify-content-center'>
				<div id={styles.laptopcarousel}>
					<LaptopCarousel />
					<div className='my-3'>
						<h3 className='d-flex align-items-center justify-content-center'>
							Lenovo Notebook{' '}
							<marquee className='ms-3' id={styles.status}>
								Nuevo
							</marquee>
						</h3>
						<div className='text-center'>
							<p style={{ fontWeight: 'bold' }}>
								Intel Core i-5 3ra Generación
							</p>
							<p style={{ fontWeight: 'bold' }} className='text-muted'>
								30 Días de Garantía
							</p>
							<p
								style={{
									fontWeight: 'bold',
									fontSize: 'larger',
									color: 'blue',
								}}>
								$250 USD
							</p>
						</div>
					</div>
				</div>
			</div>
			{!admin && <LaptopDetailsButtons />}

			<LaptopComponentsBox />
		</div>
	);
};

export default LaptopDetailsPage;
