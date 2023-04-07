import { useForm } from '@/hooks/useForm';
import ModalButtons from './ModalButtons';
import Selector from './Selector';
import TextInput from './TextInput';
import { FormError } from './FormError';

const initialForm = {
	brand: '',
	model: '',
	serial: '',
	properties: '',
	category: '',
	status: '',
	box: '',
	price: '',
	currency: '',
};

const validateForm = (form) => {
	let error = {};
	let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	let regexPhone = /^5\d{7}$/;
	let regexNumber = /^\d+$/;
	let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
	let regexDescription = /^.{1,155}$/;
	let regexInput = /^.{1,55}$/;

	if (!form.brand.trim()) {
		error.brand = `El campo 'Marca' es requerido`;
	} else if (!regexInput.test(form.brand.trim())) {
		error.brand = `El campo 'Marca' debe tener un máximo de 55 caracteres`;
	}

	if (!form.model.trim()) {
		error.model = `El campo 'Modelo' es requerido`;
	} else if (!regexInput.test(form.model.trim())) {
		error.model = `El campo 'Modelo' debe tener un máximo de 55 caracteres`;
	}

	if (!form.serial.trim()) {
		error.serial = `El campo 'No. Serie' es requerido`;
	} else if (!regexInput.test(form.serial.trim())) {
		error.serial = `El campo 'No. Serie' debe tener un máximo de 55 caracteres`;
	}

	if (!form.properties.trim()) {
		error.properties = `El campo 'Propiedades' es requerido`;
	} else if (!regexDescription.test(form.properties.trim())) {
		error.properties = `El campo 'Propiedades' debe tener un máximo de 155 caracteres`;
	}

	if (!form.category.trim()) {
		error.category = `El campo 'Categoría' es requerido`;
	}

	if (!form.status.trim()) {
		error.status = `El campo 'Estado' es requerido`;
	}

	if (!form.box.trim()) {
		error.box = `El campo 'No. Caja' es requerido`;
	} else if (!regexNumber.test(form.box.trim())) {
		error.box = `El campo 'No. Caja' debe ser mayor o igual a cero`;
	}

	if (!form.price.trim()) {
		error.price = `El campo 'Precio' es requerido`;
	} else if (!regexNumber.test(form.price.trim())) {
		error.price = `El campo 'Precio' debe ser mayor o igual a cero`;
	}

	return error;
};

const AddComponentForm = ({ handleClose }) => {
	const { form, error, handleChange, handleBlur, handleSubmit } = useForm(
		initialForm,
		validateForm
	);

	return (
		<div>
			<form onSubmit={handleSubmit} action='/admin/services/repairs'>
				<div className='container text-center'>
					<div className='row'>
						<div className='col'>
							<TextInput
								value={form.brand}
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='Marca'
								name='brand'
								type='text'
							/>
							{error.brand && <FormError>{error.brand}</FormError>}
							<TextInput
								value={form.model}
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='Modelo'
								name='model'
								type='text'
							/>
							{!error.brand && error.model && (
								<FormError>{error.model}</FormError>
							)}
							<TextInput
								value={form.serial}
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='No. Serie'
								name='serial'
								type='text'
							/>
							{!error.model && error.serial && (
								<FormError>{error.serial}</FormError>
							)}
							<TextInput
								value={form.properties}
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='Propiedades'
								name='properties'
								type='text'
								multiline={true}
							/>
							{!error.serial && error.properties && (
								<FormError>{error.properties}</FormError>
							)}
						</div>
						<div className='col'>
							<Selector
								value={form.category}
								handleChange={handleChange}
								handleBlur={handleBlur}
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
							{!error.properties && error.category && (
								<FormError>{error.category}</FormError>
							)}
							<Selector
								value={form.status}
								handleChange={handleChange}
								handleBlur={handleBlur}
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
							{!error.category && error.status && (
								<FormError>{error.status}</FormError>
							)}
							<TextInput
								value={form.box}
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='No. Caja'
								name='box'
								type='number'
							/>
							{!error.status && error.box && <FormError>{error.box}</FormError>}
							<div className='d-flex justify-content-center align-items-end ps-2'>
								<div>
									<TextInput
										value={form.price}
										handleChange={handleChange}
										handleBlur={handleBlur}
										label='Precio'
										name='price'
										type='number'
										width='40ch'
									/>
									{!error.box && error.price && (
										<FormError>{error.price}</FormError>
									)}
								</div>
								<div>
									<select
										onChange={handleChange}
										onBlur={handleBlur}
										name='currency'
										value={form.currency}
										style={{
											border: 'none',
											backgroundColor: '#00081400',
											color: 'green',
											marginBottom: '10px',
											width: '70px',
										}}>
										<option value='cup'>CUP</option>
										<option value='usd'>USD</option>
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
