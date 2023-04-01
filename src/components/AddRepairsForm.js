import TextInput from './TextInput';

const AddRepairsForm = () => {
	return (
		<div>
			<div className='container text-center'>
				<div className='row'>
					<div className='col'>
						<TextInput label='Cliente' name='client' type='text' />
						<TextInput label='Teléfono' name='phone' type='text' />
						<TextInput label='Técnico' name='technic' type='text' />
						<TextInput label='Garantía' name='warranty' type='number' />
					</div>
					<div className='col'>
						<TextInput label='Equipo' name='device' type='text' />
						<TextInput label='No. Caja' name='box' type='number' />
						<TextInput
							label='Descripción'
							name='description'
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
export default AddRepairsForm;
