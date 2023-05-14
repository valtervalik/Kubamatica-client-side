import { useForm } from '@/hooks/useForm';
import ModalButtons from './ModalButtons';
import Selector from './Selector';
import TextInput from './TextInput';
import { FormError } from './FormError';

let today = new Date();
let day = today.getDate();
let daysOfWeek = [
	'Domingo',
	'Lunes',
	'Martes',
	'Miércoles',
	'Jueves',
	'Viernes',
	'Sábado',
];
let dayOfWeek = daysOfWeek[today.getDay()];

const initialForm = {
	supplier: '',
	phone: '',
	category: '',
	status: '',
	warranty: '',
	box: '',
	brand: '',
	model: '',
	serial: '',
	properties: '',
	date: { year: today.getFullYear(), month: today.getMonth(), day, dayOfWeek },
	price: '',
	currency: 'cup',
};

const validateForm = (form) => {
	let error = {};
	let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	let regexPhone = /^5\d{7}$/;
	let regexNumber = /^\d+$/;
	let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
	let regexDescription = /^.{1,155}$/;
	let regexInput = /^.{1,55}$/;

	if (!form.supplier.trim()) {
		error.supplier = `El campo 'Proveedor' es requerido`;
	} else if (!regexName.test(form.supplier.trim())) {
		error.supplier = `El campo 'Proveedor' solo debe estar compuesto por letras`;
	}

	if (!form.phone.trim()) {
		error.phone = `El campo 'Teléfono' es requerido`;
	} else if (!regexPhone.test(form.phone.trim())) {
		error.phone = `El campo 'Teléfono' solo debe estar compuesto por un 5 seguido de 7 dígitos`;
	}

	if (!form.category.trim()) {
		error.category = `El campo 'Categoría' es requerido`;
	}

	if (!form.status.trim()) {
		error.status = `El campo 'Estado' es requerido`;
	}

	if (!form.warranty.trim()) {
		error.warranty = `El campo 'Garantía' es requerido`;
	} else if (!regexNumber.test(form.warranty.trim())) {
		error.warranty = `El campo 'Garantía' debe ser mayor o igual a cero`;
	}

	if (!form.box.trim()) {
		error.box = `El campo 'No. Caja' es requerido`;
	} else if (!regexNumber.test(form.box.trim())) {
		error.box = `El campo 'No. Caja' debe ser mayor o igual a cero`;
	}

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

	if (!form.price.trim()) {
		error.price = `El campo 'Precio' es requerido`;
	} else if (!regexNumber.test(form.price.trim())) {
		error.price = `El campo 'Precio' debe ser mayor o igual a cero`;
	}

	return error;
};

const url = '';

const AddPurchasesForm = ({ handleClose }) => {
	const { form, error, handleChange, handleBlur, handleSubmit } = useForm(
		initialForm,
		validateForm
	);

	return (
		<div>
			<form onSubmit={handleSubmit} action='/admin/services/purchases'>
				<div className='container text-center'>
					<div className='row'>
						<div className='col'>
							<TextInput
								value={form.supplier}
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='Proveedor'
								name='supplier'
								type='text'
							/>
							{error.supplier && <FormError>{error.supplier}</FormError>}
							<TextInput
								value={form.phone}
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='Teléfono'
								name='phone'
								type='text'
							/>
							{!error.supplier && error.phone && (
								<FormError>{error.phone}</FormError>
							)}
							<Selector
								value={form.category}
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='Categoría'
								name={'category'}
								options={[
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
							{!error.phone && error.category && (
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
								value={form.warranty}
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='Garantía'
								name='warranty'
								type='number'
							/>
							{!error.status && error.warranty && (
								<FormError>{error.warranty}</FormError>
							)}
							<TextInput
								value={form.box}
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='No. Caja'
								name='box'
								type='number'
							/>
							{!error.warranty && error.box && (
								<FormError>{error.box}</FormError>
							)}
						</div>
						<div className='col'>
							<TextInput
								value={form.brand}
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='Marca'
								name='brand'
								type='text'
							/>
							{!error.box && error.brand && (
								<FormError>{error.brand}</FormError>
							)}
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
									{!error.properties && error.price && (
										<FormError>{error.price}</FormError>
									)}
								</div>
								<div>
									<select
										name='currency'
										value={form.currency}
										onChange={handleChange}
										onBlur={handleBlur}
										style={{
											border: 'none',
											backgroundColor: '#000814',
											color: 'green',
											marginBottom: '10px',
											width: '70px',
										}}>
										<option value='cup'>CUP</option>
										<option value='usd'>USD</option>
									</select>
								</div>
							</div>
							{/* {form.category.trim() === 'laptops' && (
								<Button
									className='mt-4'
									style={{ fontWeight: 'bold', color: 'silver' }}>
									+ Agregar Componente
								</Button>
							)} */}
						</div>
					</div>
				</div>
				<ModalButtons handleClose={handleClose} />
			</form>
		</div>
	);
};

export default AddPurchasesForm;
