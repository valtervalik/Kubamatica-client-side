'use client';
import { useContext, useEffect, useState } from 'react';
import { SpeedDialIcon } from '@mui/material';
import { AddButton } from '@/components/AddButton';
import Tooltip from '@mui/material/Tooltip';
import PurchasesModal from '@/components/PurchasesModal';
import PurchaseDataTable from '@/components/PurchaseDataTable';
import { helpHttp } from '@/helpers/helpHttp';
import SnackBarContext from '@/context/SnackBarContext';

const Purchases = () => {
	const [openPurchases, setOpenPurchases] = useState(false);
	const handleOpenPurchases = () => setOpenPurchases(true);
	const handleClosePurchases = () => setOpenPurchases(false);

	const [purchaseData, setPurchaseData] = useState([]);

	const { openSuccessSnack, openWarningSnack, msg } =
		useContext(SnackBarContext);

	useEffect(() => {
		helpHttp()
			.get(`http://127.0.0.1:5000/purchases`)
			.then((res) => {
				if (!res.err) {
					setPurchaseData(res);
				} else {
					setPurchaseData(null);
				}
			});
	}, [openSuccessSnack, msg]);

	return (
		<div className='mainh1 px-5'>
			<h2 className='text-center'>Registro de Compras</h2>
			<div className='mb-2'>
				<p style={{ fontSize: '20px', fontWeight: 'bold', color: '#0010cc' }}>
					Enero <span>2023</span>
				</p>
				<PurchaseDataTable
					columns={[
						'No.',
						'Caja',
						'Proveedor',
						'Teléfono',
						'Marca',
						'Modelo',
						'No. Serie',
						'Categoría',
						'Estado',
						'Propiedades',
						'Fecha',
						'Precio',
						'Garantía',
					]}
					pdata={purchaseData}
				/>
			</div>
			<PurchasesModal
				handleClose={handleClosePurchases}
				openPurchases={openPurchases}
			/>
			<Tooltip title='Añadir Servicio'>
				<AddButton onClick={handleOpenPurchases}>
					<SpeedDialIcon className='d-flex align-content-center' />
				</AddButton>
			</Tooltip>
		</div>
	);
};

export default Purchases;
