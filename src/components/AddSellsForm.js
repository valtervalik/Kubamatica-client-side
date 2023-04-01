import Selector from './Selector';
import TextInput from './TextInput';

const AddSellsForm = () => {
	return (
		<div>
			<div className='container text-center'>
				<div className='row'>
					<div className='col'>
						<TextInput label='Cliente' name='client' type='text' />
						<TextInput label='Teléfono' name='phone' type='text' />
						<TextInput label='Técnico' name='technic' type='text' />
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
						<TextInput label='Garantía' name='warranty' type='number' />
						<TextInput label='No. Caja' name='box' type='number' />
					</div>
					<div className='col'>
						<TextInput label='Marca' name='brand' type='text' />
						<TextInput label='Modelo' name='model' type='text' />
						<TextInput label='No. Serie' name='serial' type='text' />
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
						<TextInput
							label='Propiedades'
							name='properties'
							type='text'
							multiline={true}
						/>
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
		</div>
	);
};
export default AddSellsForm;
