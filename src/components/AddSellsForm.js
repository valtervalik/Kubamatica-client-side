'use client';
import { useForm } from '@/hooks/useForm';
import ModalButtons from './ModalButtons';
import Selector from './Selector';
import TextInput from './TextInput';
import { FormError } from './FormError';
import { useEffect, useState } from 'react';
import { helpHttp } from '@/helpers/helpHttp';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import BasicDatePicker from './BasicDatePicker';

let daysOfWeek = [
	'Domingo',
	'Lunes',
	'Martes',
	'Miércoles',
	'Jueves',
	'Viernes',
	'Sábado',
];

const validateForm = (form) => {
	let error = {};
	let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	let regexPhone = /^5\d{7}$/;
	let regexNumber = /^\d+$/;
	let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
	let regexDescription = /^.{1,155}$/;
	let regexInput = /^.{1,55}$/;

	if (!form.client.trim()) {
		error.client = `El campo 'Cliente' es requerido`;
	} else if (!regexName.test(form.client.trim())) {
		error.client = `El campo 'Cliente' solo debe estar compuesto por letras`;
	}

	if (!form.phone.trim()) {
		error.phone = `El campo 'Teléfono' es requerido`;
	} else if (!regexPhone.test(form.phone.trim())) {
		error.phone = `El campo 'Teléfono' solo debe estar compuesto por un 5 seguido de 7 dígitos`;
	}

	if (!form.technic.trim()) {
		error.technic = `El campo 'Técnico' es requerido`;
	} else if (!regexName.test(form.technic.trim())) {
		error.technic = `El campo 'Técnico' solo debe estar compuesto por letras`;
	}

	if (!form.category.trim()) {
		error.category = `El campo 'Categoría' es requerido`;
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

	if (!form.status.trim()) {
		error.status = `El campo 'Estado' es requerido`;
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

const url = 'http://127.0.0.1:5000/sells';

const AddSellsForm = ({ handleClose, component }) => {
	const [value, setValue] = useState(dayjs());
	const [categories, setCategories] = useState([]);

	const router = useRouter();

	const action = () => {
		router.push('/managment/administration/services/sells');
	};

	const initialForm = {
		client: '',
		phone: '',
		technic: '',
		category: `${component.category}`,
		warranty: '',
		box: `${component.box}`,
		brand: `${component.brand}`,
		model: `${component.model}`,
		serial: `${component.serial}`,
		status: `${component.status}`,
		properties: `${component.properties}`,
		date: {
			year: value.$y,
			month: value.$M,
			day: value.$D,
			dayOfWeek: daysOfWeek[value.$W],
		},
		price: `${component.price}`,
		currency: `${component.currency}`,
	};

	const { form, error, handleChange, handleBlur, handleSubmit } = useForm(
		initialForm,
		validateForm,
		url,
		handleClose,
		action
	);

	useEffect(() => {
		helpHttp()
			.get('http://127.0.0.1:5000/categories')
			.then((res) => {
				if (!res.err) {
					setCategories(res);
				} else {
					setCategories(null);
				}
			});
	}, []);

	useEffect(() => {
		form.date = {
			year: value.$y,
			month: value.$M,
			day: value.$D,
			dayOfWeek: daysOfWeek[value.$W],
		};
	}, [value, form]);

	const options = [];
	categories &&
		categories.map((cat) => {
			options.push({
				option: cat.category[0].toUpperCase() + cat.category.substring(1),
				value: cat.category,
			});
		});

	return (
		<div>
			<form onSubmit={handleSubmit} action='/admin/services/sells'>
				<div className='container text-center'>
					<div className='row'>
						<div className='col'>
							<TextInput
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='Cliente'
								name='client'
								type='text'
								value={form.client}
							/>
							{error.client && <FormError>{error.client}</FormError>}
							<TextInput
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='Teléfono'
								name='phone'
								type='text'
								value={form.phone}
							/>
							{!error.client && error.phone && (
								<FormError>{error.phone}</FormError>
							)}
							<TextInput
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='Técnico'
								name='technic'
								type='text'
								value={form.technic}
							/>
							{!error.phone && error.technic && (
								<FormError>{error.technic}</FormError>
							)}
							<Selector
								value={form.category}
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='Categoría'
								name={'category'}
								disabled={true}
								options={options}
							/>
							{!error.technic && error.category && (
								<FormError>{error.category}</FormError>
							)}
							<TextInput
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='Garantía (días)'
								name='warranty'
								type='number'
								value={form.warranty}
							/>
							{!error.category && error.warranty && (
								<FormError>{error.warranty}</FormError>
							)}
							<TextInput
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='No. Caja'
								name='box'
								type='number'
								value={form.box}
								disabled={true}
							/>
							{!error.warranty && error.box && (
								<FormError>{error.box}</FormError>
							)}
							<BasicDatePicker value={value} setValue={setValue} />
						</div>
						<div className='col'>
							<TextInput
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='Marca'
								name='brand'
								type='text'
								value={form.brand}
								disabled={true}
							/>
							{!error.box && error.brand && (
								<FormError>{error.brand}</FormError>
							)}
							<TextInput
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='Modelo'
								name='model'
								type='text'
								value={form.model}
								disabled={true}
							/>
							{!error.brand && error.model && (
								<FormError>{error.model}</FormError>
							)}
							<TextInput
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='No. Serie'
								name='serial'
								type='text'
								value={form.serial}
								disabled={true}
							/>
							{!error.model && error.serial && (
								<FormError>{error.serial}</FormError>
							)}
							<Selector
								value={form.status}
								handleChange={handleChange}
								handleBlur={handleBlur}
								disabled={true}
								label='Estado'
								name={'status'}
								options={[
									{
										option: 'Nuevo',
										value: 'Nuevo',
									},
									{
										option: 'Poco Uso',
										value: 'Poco Uso',
									},
									{
										option: 'Usado',
										value: 'Usado',
									},
								]}
							/>
							{!error.serial && error.status && (
								<FormError>{error.status}</FormError>
							)}
							<TextInput
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='Propiedades'
								name='properties'
								type='text'
								multiline={true}
								value={form.properties}
								disabled={true}
							/>
							{!error.status && error.properties && (
								<FormError>{error.properties}</FormError>
							)}
							<div className='d-flex justify-content-center align-items-end ps-2'>
								<div>
									<TextInput
										handleChange={handleChange}
										handleBlur={handleBlur}
										label='Precio'
										name='price'
										type='number'
										width='40ch'
										value={form.price}
									/>
									{!error.properties && error.price && (
										<FormError>{error.price}</FormError>
									)}
								</div>
								<div>
									<select
										value={form.currency}
										onChange={handleChange}
										onBlur={handleBlur}
										name='currency'
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
						</div>
					</div>
				</div>
				<ModalButtons handleClose={handleClose} />
			</form>
		</div>
	);
};
export default AddSellsForm;
