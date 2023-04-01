import ModalButtons from './ModalButtons';
import Selector from './Selector';
import TextInput from './TextInput';

const AddComponentForm = ({ handleClose }) => {
	return (
		<div>
			<form action='/admin/services/repairs'>
				<div className='container text-center'>
					<div className='row'>
						<div className='col'>
							<TextInput label='Marca' name='brand' type='text' />
							<TextInput label='Modelo' name='model' type='text' />
							<TextInput label='No. Serie' name='serial' type='text' />
							<TextInput
								label='Propiedades'
								name='properties'
								type='text'
								multiline={true}
							/>
						</div>
						<div className='col'>
							<Selector
								label='Categoría'
								name={'category'}
								options={[
									{
										option: 'Portátiles',
										value: 'laptops',
									},
									{
										option: 'Baterías',
										value: 'baterías',
									},
									{
										option: 'Cargadores',
										value: 'cargadores',
									},
									{
										option: 'Pantallas',
										value: 'pantallas',
									},
									{
										option: 'Teclados',
										value: 'teclados',
									},
									{
										option: 'TouchPads',
										value: 'touchpads',
									},
									{
										option: 'Chasis',
										value: 'chasis',
									},
									{
										option: 'Procesadores',
										value: 'procesadores',
									},

									{
										option: 'RAM',
										value: 'ram',
									},
									{
										option: 'Discos',
										value: 'discos',
									},
									{
										option: 'Audio',
										value: 'audio',
									},
									{
										option: 'Red',
										value: 'red',
									},
									{
										option: 'Motherboards',
										value: 'motherboards',
									},
								]}
							/>
							<Selector
								label='Estado'
								name={'status'}
								options={[
									{
										option: 'Nuevo',
										value: 'new',
									},
									{
										option: 'Poco Uso',
										value: 'bitused',
									},
									{
										option: 'Usado',
										value: 'used',
									},
								]}
							/>
							<TextInput label='No. Caja' name='box' type='number' />
							<div className='d-flex justify-content-center align-items-end ps-2'>
								<div>
									<TextInput
										label='Precio'
										name='price'
										type='number'
										width='40ch'
									/>
								</div>
								<div>
									<select
										style={{
											border: 'none',
											backgroundColor: '#000814',
											color: 'green',
											marginBottom: '10px',
											width: '70px',
										}}>
										<option value='CUP'>CUP</option>
										<option value='USD'>USD</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ModalButtons handleClose={handleClose} />
			</form>
		</div>
	);
};

export default AddComponentForm;