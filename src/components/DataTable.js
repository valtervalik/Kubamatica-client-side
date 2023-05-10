'use client';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Tooltip } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { helpHttp } from '@/helpers/helpHttp';
import SnackBarContext from '@/context/SnackBarContext';

export default function DataTable({
	params,
	columns,
	cdata,
	maxHeight = 350,
	crud,
}) {
	const { setOpenSuccessSnack, setOpenWarningSnack, setMsg } =
		React.useContext(SnackBarContext);

	return (
		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
			<TableContainer sx={{ maxHeight: { maxHeight } }}>
				<Table stickyHeader aria-label='sticky table'>
					<TableHead>
						<TableRow>
							{columns.map((column, i) => (
								<TableCell
									className='text-light py-1 px-2'
									sx={{ backgroundColor: '#000814' }}
									key={i}
									align='center'>
									{column}
								</TableCell>
							))}
							<TableCell
								sx={{ backgroundColor: '#000814' }}
								className='text-primary py-1 px-2'
								align='center'>
								Acciones
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{cdata &&
							cdata.map((component, i) => {
								return (
									<TableRow
										role='checkbox'
										tabIndex={-1}
										key={i + 3}
										sx={{
											'&:nth-of-type(2n+1)': { backgroundColor: 'lightgray' },
										}}>
										<TableCell
											style={{
												fontSize: '12px',
												fontWeight: 'bold',
											}}
											className='py-3 px-2'
											align='center'>
											{i + 1}
										</TableCell>
										<TableCell
											style={{
												fontSize: '12px',
												fontWeight: 'bold',
											}}
											className='py-3 px-2'
											align='center'>
											{component.box}
										</TableCell>
										<TableCell
											style={{
												fontSize: '12px',
												fontWeight: 'bold',
											}}
											className='py-3 px-2'
											align='center'>
											{component.brand}
										</TableCell>
										<TableCell
											style={{
												fontSize: '12px',
												fontWeight: 'bold',
											}}
											className='py-3 px-2'
											align='center'>
											{component.model}
										</TableCell>
										<TableCell
											style={{
												fontSize: '12px',
												fontWeight: 'bold',
											}}
											className='py-3 px-2'
											align='center'>
											{component.serial}
										</TableCell>
										<TableCell
											style={{
												fontSize: '12px',
												fontWeight: 'bold',
											}}
											className='py-3 px-2'
											align='center'>
											{component.status}
										</TableCell>
										<TableCell
											style={{
												fontSize: '12px',
												fontWeight: 'bold',
											}}
											className='py-3 px-2'
											align='center'>
											{component.properties}
										</TableCell>
										<TableCell
											style={{
												fontSize: '12px',
												fontWeight: 'bold',
											}}
											className='py-3 px-2'
											align='center'>
											{`$${
												component.price
											} ${component.currency.toUpperCase()}`}
										</TableCell>
										<TableCell className='py-1 px-2' align='center'>
											{crud && (
												<Tooltip title='Vender'>
													<Button
														className='btn px-0 border-0'
														style={{ color: '#00cc10' }}>
														<AttachMoneyIcon />
													</Button>
												</Tooltip>
											)}
											<Tooltip title='Editar'>
												<Button
													className='btn px-0 border-0'
													style={{ color: '#0010cc' }}>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='18'
														height='18'
														fill='currentColor'
														className='bi bi-pencil-square'
														viewBox='0 0 16 16'>
														<path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
														<path
															fillRule='evenodd'
															d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'
														/>
													</svg>
												</Button>
											</Tooltip>
											{crud && (
												<Tooltip title='Eliminar'>
													<Button
														onClick={() => {
															helpHttp()
																.del(
																	`http://127.0.0.1:5000/components/${params}/${component._id}`
																)
																.then((res) => {
																	setMsg(res.message);
																	setOpenSuccessSnack(true);
																	setTimeout(() => {
																		setOpenSuccessSnack(false);
																		setMsg('');
																	}, 3000);
																});
														}}
														className='btn px-0 border-0'
														style={{ color: '#cc0010' }}>
														<DeleteForeverIcon />
													</Button>
												</Tooltip>
											)}
										</TableCell>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
}
