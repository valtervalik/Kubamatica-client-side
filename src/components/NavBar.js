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
import { helpHttp } from '@/helpers/helpHttp';
import SnackBarContext from '@/context/SnackBarContext';
import Cookies from 'js-cookie';
import SessionContext from '@/context/SessionContext';

const pages = ['Reparaciones', 'Ventas', 'Compras', 'Inventario', 'Usuarios'];
const urls = [
	'/managment/administration/services/repairs',
	'/managment/administration/services/sells',
	'/managment/administration/services/purchases',
	'/managment/administration/inventory/components',
	'/managment/administration/users',
];

const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = useState(null);
	const { setOpenSuccessSnack, setMsg } = useContext(SnackBarContext);
	const router = useRouter();

	const { currentUser } = useContext(SessionContext);

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
				background: 'linear-gradient(45deg, white 10%, #0066ff66, darkblue)',
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
								<Link key={page} className='links' href={urls[i]}>
									<MenuItem onClick={handleCloseNavMenu}>
										{page}
										{/* <Typography textAlign='center'>{page}</Typography> */}
									</MenuItem>
								</Link>
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
						<Button id='basic-button'>
							<Link
								style={{
									textDecoration: 'none',
									color: 'gray',
									fontWeight: 'bold',
								}}
								href={'/managment/administration/inventory/components'}>
								Inventario
							</Link>
						</Button>
						{currentUser.role === 'Administrador' && (
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
						)}
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Cerrar Sesión'>
							<IconButton
								sx={{ p: 0 }}
								onClick={async () => {
									await helpHttp()
										.post('http://127.0.0.1:5000/users/logout')
										.then((res) => {
											Cookies.remove('currentUser');
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
