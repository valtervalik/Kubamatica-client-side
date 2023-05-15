'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

export default function LinkMenu({ pageName, linkNames }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleMouseOver = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				id='basic-button'
				style={{ color: 'gray', fontWeight: 'bold' }}
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onMouseOver={handleMouseOver}>
				{pageName}
			</Button>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}>
				<div onMouseLeave={handleClose}>
					{linkNames &&
						linkNames.map(({ name, url }) => (
							<Link
								key={url}
								style={{ textDecoration: 'none', color: 'gray' }}
								href={url}>
								<MenuItem onClick={handleClose}>{name}</MenuItem>
							</Link>
						))}
				</div>
			</Menu>
		</div>
	);
}
