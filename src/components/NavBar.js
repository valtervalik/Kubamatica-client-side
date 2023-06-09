'use client';
import React, { useContext, useState } from 'react';
import LogoutRoundedIcon from '@mui/icons-material/Logout';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import './NavBar.css';
import LinkMenu from './LinkMenu';
import { Button } from '@mui/material';
import SearchInput from './SearchInput';
import { helpHttp } from '@/helpers/helpHttp';
import SnackBarContext from '@/context/SnackBarContext';

const pages = ['Servicios', 'Inventario', 'Usuarios'];
const urls = [
	'/managment/administration/services/repairs',
	'/managment/administration/inventory/laptops',
	'/managment/administration/users',
];

const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = useState(null);
	const { setOpenSuccessSnack, setMsg } = useContext(SnackBarContext);
	const router = useRouter();

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar
			position='static'
			sx={{
				backgroundColor: '#ffffff90',
				boxShadow: 'none',
				background: 'linear-gradient(45deg, azure 10%, #0066ff66, darkblue)',
				backdropFilter: 'blur(12px) saturate(180%)',
				position: 'fixed',
				top: 0,
			}}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography
						variant='h6'
						noWrap
						component='a'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
							width: '15%',
						}}>
						<Image
							width={500}
							height={500}
							id='klogo'
							src='/Logo-Kubamática.png'
							alt=''
							priority
						/>
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							style={{ color: 'gray' }}
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}>
							{pages.map((page, i) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Link className='links' href={urls[i]}>
										{page}
									</Link>
									{/* <Typography textAlign='center'>{page}</Typography> */}
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant='h5'
						noWrap
						component='a'
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							justifyContent: 'center',
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}>
						<Image
							width={500}
							height={500}
							id='klogo2'
							src='/Logo-Kubamática.png'
							alt=''
							priority
						/>
					</Typography>
					<Box
						className='ms-5'
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
						}}>
						<LinkMenu
							pageName='Servicios'
							linkNames={[
								{
									name: 'Reparaciones',
									url: '/managment/administration/services/repairs',
								},
								{
									name: 'Ventas',
									url: '/managment/administration/services/sells',
								},
								{
									name: 'Compras',
									url: '/managment/administration/services/purchases',
								},
							]}
						/>
						<LinkMenu
							pageName='Inventario'
							linkNames={[
								{
									name: 'Portátiles',
									url: '/managment/administration/inventory/laptops',
								},
								{
									name: 'Componentes',
									url: '/managment/administration/inventory/components',
								},
							]}
						/>
						<Button id='basic-button'>
							<Link
								style={{
									textDecoration: 'none',
									color: 'gray',
									fontWeight: 'bold',
								}}
								href={'/managment/administration/users'}>
								Usuarios
							</Link>
						</Button>
					</Box>
					<SearchInput />
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='LogOut'>
							<IconButton
								sx={{ p: 0 }}
								onClick={async () => {
									await helpHttp()
										.post('http://127.0.0.1:5000/users/logout')
										.then((res) => {
											console.log(res);
											localStorage.clear();
											router.push('/managment/session/login');
											setMsg(res.message);
											setOpenSuccessSnack(true);
											setTimeout(() => {
												setOpenSuccessSnack(false);
												setMsg('');
											}, 3000);
										});
								}}>
								<LogoutRoundedIcon sx={{ color: 'azure', fontSize: '30px' }} />
							</IconButton>
						</Tooltip>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default NavBar;
