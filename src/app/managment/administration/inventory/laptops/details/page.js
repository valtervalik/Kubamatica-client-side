'use client';
import LaptopCarousel from '@/components/LaptopCarousel';
import React from 'react';
import styles from './page.module.css';
import LaptopDetailsButtons from '@/components/LaptopDetailsButtons';
import LaptopComponentsBox from '@/components/LaptopComponentsBox';

const LaptopDetailsPage = () => {
	return (
		/* This is a JSX code block that defines the layout and content of a page component for displaying
		details of a laptop product. It includes a carousel component for displaying images of the laptop,
		information about the laptop's specifications and pricing, and buttons for adding the laptop to a
		cart or wishlist. It also includes a component for displaying the various components and features
		of the laptop. The `className` attributes are used to apply CSS styles to the various elements. */
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
			<LaptopDetailsButtons />

			<LaptopComponentsBox />
		</div>
	);
};

export default LaptopDetailsPage;
