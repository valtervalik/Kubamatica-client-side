import ComponentNavTabs from '@/components/ComponentNavTabs';
import DataTable from '@/components/DataTable';

export default function CategoryPage() {
	return (
		<div className='mainh1 px-5'>
			<div>
				<div>
					<ComponentNavTabs />
				</div>
				<DataTable
					maxHeight={420}
					columns={[
						'No.',
						'Caja',
						'Marca',
						'Modelo',
						'No. Serie',
						'Estado',
						'Propiedades',
						'Precio',
					]}
					tdata={[
						'6',
						'Asus ROG',
						'SW-83817',
						'YjsY4568SUTSUh5d5s',
						'Nuevo',
						'Descripción de las propiedades',
						'$ 000 cup',
					]}
				/>
			</div>
		</div>
	);
}
