'use client';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';

function LaptopCarousel() {
	return (
		<Carousel>
			<Carousel.Item>
				<Image
					style={{ borderRadius: '15px' }}
					width={1000}
					height={200}
					className='d-block w-100'
					src='/nordwood-themes-_sg8nXmpWDM-unsplash.jpg'
					alt='First slide'
				/>
			</Carousel.Item>
			<Carousel.Item>
				<Image
					style={{ borderRadius: '15px' }}
					width={1000}
					height={200}
					className='d-block w-100'
					src='/windows-C6T6vr1sQI0-unsplash.jpg'
					alt='Second slide'
				/>
			</Carousel.Item>
			<Carousel.Item>
				<Image
					style={{ borderRadius: '15px' }}
					width={1000}
					height={200}
					className='d-block w-100'
					src='/james-mckinven-tpuAo8gVs58-unsplash.jpg'
					alt='Third slide'
				/>
			</Carousel.Item>
		</Carousel>
	);
}

export default LaptopCarousel;
