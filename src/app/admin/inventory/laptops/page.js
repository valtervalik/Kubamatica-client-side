'use client';
import React, { useState } from 'react';
import { SpeedDialIcon } from '@mui/material';
import { AddButton } from '@/components/AddButton';
import ImgCard from '@/components/ImgCard';
import Tooltip from '@mui/material/Tooltip';
import LaptopModal from '@/components/LaptopModal';

const Laptops = () => {
	const [openLaptop, setOpenLaptop] = useState(false);
	const handleOpenLaptop = () => setOpenLaptop(true);
	const handleCloseLaptop = () => setOpenLaptop(false);

	return (
		<div>
			<div className='container text-center  mb-5 mainh1'>
				<div className='row align-items-start'>
					<div className='col'>
						<ImgCard
							img='/ben-kolde-t9DooibgMEk-unsplash.jpg'
							desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
						/>
						<ImgCard
							img='/dell-7Bmk9mAXP2I-unsplash.jpg'
							desc='Lorem Ipsum is simply dummy '
						/>
					</div>
					<div className='col'>
						<ImgCard img='/dell-Gi3iUJ1FwxI-unsplash.jpg' desc='Lorem Ipsum' />
						<ImgCard
							img='/michal-kubalczyk-WecngmAT-KY-unsplash.jpg'
							desc='Lorem Ipsum is simply dummy text of the printing an'
						/>
					</div>
					<div className='col'>
						<ImgCard
							img='/dell-ocAuPlfZXEc-unsplash.jpg'
							desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text  '
						/>
						<ImgCard
							img='/nordwood-themes-_sg8nXmpWDM-unsplash.jpg'
							desc='Lorem Ipsum is sim'
						/>
					</div>
					<div className='col'>
						<ImgCard
							img='/dell-SGY0LIfTKZ4-unsplash.jpg'
							desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
						/>
						<ImgCard
							img='/windows-C6T6vr1sQI0-unsplash.jpg'
							desc='Lorem Ipsum is simply dummy text of the '
						/>
					</div>
					<div className='col'>
						<ImgCard
							img='/james-mckinven-tpuAo8gVs58-unsplash.jpg'
							desc='Lorem Ipsum is simply'
						/>
						<ImgCard
							img='/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpg'
							desc='Lorem Ipsum is simpl'
						/>
					</div>
				</div>
			</div>
			<LaptopModal openLaptop={openLaptop} handleClose={handleCloseLaptop} />
			<Tooltip title='Añadir Portátil'>
				<AddButton onClick={handleOpenLaptop}>
					<SpeedDialIcon />
				</AddButton>
			</Tooltip>
		</div>
	);
};

export default Laptops;
