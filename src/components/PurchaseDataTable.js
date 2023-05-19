'use client';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Tooltip } from '@mui/material';
import EditPurchaseModal from './EditPurchaseModal';

export default function PurchaseDataTable({
	columns,
	pdata,
	maxHeight = 350,
	month,
	year,
	role,
}) {
	const [openEdit, setOpenEdit] = useState(false);
	const handleOpenEdit = () => setOpenEdit(true);
	const handleCloseEdit = () => setOpenEdit(false);

	const [purchase, setPurchase] = useState(null);

	const filteredData = pdata.filter(
		(purchase) => purchase.date.month === month && purchase.date.year === year
	);

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
							{role === 'Dependiente' && (
								<TableCell
									sx={{ backgroundColor: '#000814' }}
									className='text-primary py-1 px-2'
									align='center'>
									Acciones
								</TableCell>
							)}
						</TableRow>
					</TableHead>
					<TableBody>
						{pdata &&
							filteredData
								.sort((a, b) => a.date.day - b.date.day)
								.map((purchase, i) => {
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
												className='py-2 px-2'
												align='center'>
												{i + 1}
											</TableCell>
											<TableCell
												style={{
													fontSize: '12px',
													fontWeight: 'bold',
												}}
												className='py-2 px-2'
												align='center'>
												{purchase.box}
											</TableCell>
											{purchase.supplier.length > 10 ? (
												<Tooltip title={purchase.supplier}>
													<TableCell
														style={{
															fontSize: '12px',
															fontWeight: 'bold',
														}}
														className='py-2 px-2'
														align='center'>
														{purchase.supplier.substring(0, 10) + '...'}
													</TableCell>
												</Tooltip>
											) : (
												<TableCell
													style={{
														fontSize: '12px',
														fontWeight: 'bold',
													}}
													className='py-2 px-2'
													align='center'>
													{purchase.supplier}
												</TableCell>
											)}
											<TableCell
												style={{
													fontSize: '12px',
													fontWeight: 'bold',
												}}
												className='py-2 px-2'
												align='center'>
												+53 {purchase.phone}
											</TableCell>
											<TableCell
												style={{
													fontSize: '12px',
													fontWeight: 'bold',
												}}
												className='py-2 px-2'
												align='center'>
												{purchase.brand}
											</TableCell>
											{purchase.model.length > 10 ? (
												<Tooltip title={purchase.model}>
													<TableCell
														style={{
															fontSize: '12px',
															fontWeight: 'bold',
														}}
														className='py-2 px-2'
														align='center'>
														{purchase.model.substring(0, 10) + '...'}
													</TableCell>
												</Tooltip>
											) : (
												<TableCell
													style={{
														fontSize: '12px',
														fontWeight: 'bold',
													}}
													className='py-2 px-2'
													align='center'>
													{purchase.model}
												</TableCell>
											)}
											{purchase.serial.length > 10 ? (
												<Tooltip title={purchase.serial}>
													<TableCell
														style={{
															fontSize: '12px',
															fontWeight: 'bold',
														}}
														className='py-2 px-2'
														align='center'>
														{purchase.serial.substring(0, 10) + '...'}
													</TableCell>
												</Tooltip>
											) : (
												<TableCell
													style={{
														fontSize: '12px',
														fontWeight: 'bold',
													}}
													className='py-2 px-2'
													align='center'>
													{purchase.serial}
												</TableCell>
											)}
											<TableCell
												style={{
													fontSize: '12px',
													fontWeight: 'bold',
												}}
												className='py-2 px-2'
												align='center'>
												{purchase.category}
											</TableCell>
											<TableCell
												style={{
													fontSize: '12px',
													fontWeight: 'bold',
												}}
												className='py-2 px-2'
												align='center'>
												{purchase.status}
											</TableCell>
											{purchase.properties.length > 10 ? (
												<Tooltip title={purchase.properties}>
													<TableCell
														style={{
															fontSize: '12px',
															fontWeight: 'bold',
														}}
														className='py-2 px-2'
														align='center'>
														{purchase.properties.substring(0, 10) + '...'}
													</TableCell>
												</Tooltip>
											) : (
												<TableCell
													style={{
														fontSize: '12px',
														fontWeight: 'bold',
													}}
													className='py-2 px-2'
													align='center'>
													{purchase.properties}
												</TableCell>
											)}
											<TableCell
												style={{
													fontSize: '12px',
													fontWeight: 'bold',
												}}
												className='py-2 px-2'
												align='center'>
												{purchase.date.dayOfWeek} - {purchase.date.day}
											</TableCell>
											<TableCell
												style={{
													fontSize: '12px',
													fontWeight: 'bold',
												}}
												className='py-2 px-2'
												align='center'>
												$ {purchase.price} {purchase.currency.toUpperCase()}
											</TableCell>
											<TableCell
												style={{
													fontSize: '12px',
													fontWeight: 'bold',
												}}
												className='py-2 px-2'
												align='center'>
												{purchase.warranty} días
											</TableCell>
											{role === 'Dependiente' && (
												<TableCell
													style={{
														fontSize: '12px',
														fontWeight: 'bold',
													}}
													className='py-2 px-2'
													align='center'>
													<Tooltip title='Editar'>
														<Button
															onClick={() => {
																handleOpenEdit();
																setPurchase(purchase);
															}}
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
												</TableCell>
											)}
										</TableRow>
									);
								})}
					</TableBody>
				</Table>
			</TableContainer>
			<EditPurchaseModal
				open={openEdit}
				handleClose={handleCloseEdit}
				purchase={purchase}
			/>
		</Paper>
	);
}
