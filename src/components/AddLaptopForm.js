'use client';
import { useReducer } from 'react';
import TextInput from './TextInput';
import DropZone from './DropZone';
import styles from './AddLaptopForm.module.css';
import Selector from './Selector';
import ModalButtons from './ModalButtons';

const AddLaptopForm = ({ handleClose }) => {
	const reducer = (state, action) => {
		switch (action.type) {
			case 'SET_IN_DROP_ZONE':
				return { ...state, inDropZone: action.inDropZone };
			case 'ADD_FILE_TO_LIST':
				return { ...state, fileList: state.fileList.concat(action.files) };
			default:
				return state;
		}
	};

	// destructuring state and dispatch, initializing fileList to empty array
	const [data, dispatch] = useReducer(reducer, {
		inDropZone: false,
		fileList: [],
	});

	return (
		<div>
			<form action='/admin/inventory/laptops'>
				<div className='container text-center'>
					<div className={`mt-3 ${styles.container}`}>
						<div className={styles.main}>
							<h5 className={styles.title}>Arrastra y suelta imágenes aquí</h5>
							<DropZone data={data} dispatch={dispatch} />
						</div>
					</div>

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
							<TextInput label='Garantía' name='warranty' type='number' />
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
											backgroundColor: '#00081400',
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

export default AddLaptopForm;