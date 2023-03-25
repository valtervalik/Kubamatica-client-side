import TextInput from './TextInput';

const AddPurchasesForm = () => {
	return (
		<div>
			<div className='container text-center'>
				<div className='row'>
					<div className='col'>
						<TextInput label='Proveedor' name='supplier' type='text' />
						<TextInput label='Teléfono' name='phone' type='text' />
						<TextInput label='Estado' name='status' type='text' />
						<TextInput label='Garantía' name='warranty' type='text' />
						<TextInput label='No. Caja' name='box' type='number' />
					</div>
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

export default AddPurchasesForm;
