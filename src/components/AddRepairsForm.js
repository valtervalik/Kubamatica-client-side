'use client';
import { useEffect, useState } from 'react';
import BasicDatePicker from './BasicDatePicker';
import { FormError } from './FormError';
import ModalButtons from './ModalButtons';
import TextInput from './TextInput';
import { useForm } from '@/hooks/useForm';
import dayjs from 'dayjs';

// let today = new Date();
// let day = today.getDate();
let daysOfWeek = [
	'Domingo',
	'Lunes',
	'Martes',
	'Miércoles',
	'Jueves',
	'Viernes',
	'Sábado',
];
// let dayOfWeek = daysOfWeek[today.getDay()];
// let formattedDate = dayOfWeek + ' - ' + day;

const validateForm = (form) => {
	let error = {};
	let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	let regexPhone = /^5\d{7}$/;
	let regexNumber = /^\d+$/;
	let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
	let regexDescription = /^.{1,155}$/;

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

	if (!form.warranty.trim()) {
		error.warranty = `El campo 'Garantía' es requerido`;
	} else if (!regexNumber.test(form.warranty.trim())) {
		error.warranty = `El campo 'Garantía' debe ser un número entero`;
	}

	if (!form.device.trim()) {
		error.device = `El campo 'Equipo' es requerido`;
	} else if (!regexName.test(form.device.trim())) {
		error.device = `El campo 'Equipo' solo debe estar compuesto por letras`;
	}

	if (!form.box.trim()) {
		error.box = `El campo 'No. Caja' es requerido`;
	} else if (!regexNumber.test(form.box.trim())) {
		error.box = `El campo 'No. Caja' debe ser un número entero`;
	}

	if (!form.description.trim()) {
		error.description = `El campo 'Descripción' es requerido`;
	} else if (!regexDescription.test(form.description.trim())) {
		error.description = `El campo 'Descripción' debe tener un máximo de 155 caracteres`;
	}

	if (!form.price.trim()) {
		error.price = `El campo 'Precio' es requerido`;
	}

	return error;
};

const url = 'http://127.0.0.1:5000/repairs';

const AddRepairsForm = ({ handleClose }) => {
	const [value, setValue] = useState(dayjs());

	const initialForm = {
		client: '',
		phone: '',
		technic: '',
		warranty: '',
		device: '',
		box: '',
		description: '',
		date: {
			year: value.$y,
			month: value.$M,
			day: value.$D,
			dayOfWeek: daysOfWeek[value.$W],
		},
		price: '',
		currency: 'cup',
	};

	const { form, error, handleChange, handleBlur, handleSubmit } = useForm(
		initialForm,
		validateForm,
		url,
		handleClose
	);

	useEffect(() => {
		form.date = {
			year: value.$y,
			month: value.$M,
			day: value.$D,
			dayOfWeek: daysOfWeek[value.$W],
		};
	}, [value, form]);

	return (
		<div>
			<form onSubmit={handleSubmit} action='/admin/services/repairs' noValidate>
				<div className='container text-center'>
					<div className='row'>
						<div className='col'>
							<TextInput
								label='Cliente'
								handleChange={handleChange}
								handleBlur={handleBlur}
								name='client'
								type='text'
								value={form.client}
							/>
							{error.client && <FormError>{error.client}</FormError>}
							<TextInput
								label='Teléfono'
								handleChange={handleChange}
								handleBlur={handleBlur}
								name='phone'
								type='text'
								value={form.phone}
							/>
							{!error.client && error.phone && (
								<FormError>{error.phone}</FormError>
							)}
							<TextInput
								label='Técnico'
								handleChange={handleChange}
								handleBlur={handleBlur}
								name='technic'
								type='text'
								value={form.technic}
							/>
							{!error.phone && error.technic && (
								<FormError>{error.technic}</FormError>
							)}
							<TextInput
								label='Garantía (días)'
								handleChange={handleChange}
								handleBlur={handleBlur}
								name='warranty'
								type='number'
								value={form.warranty}
							/>
							{!error.technic && error.warranty && (
								<FormError>{error.warranty}</FormError>
							)}
							<BasicDatePicker value={value} setValue={setValue} />
						</div>
						<div className='col'>
							<TextInput
								label='Equipo'
								handleChange={handleChange}
								handleBlur={handleBlur}
								name='device'
								type='text'
								value={form.device}
							/>
							{!error.warranty && error.device && (
								<FormError>{error.device}</FormError>
							)}
							<TextInput
								label='No. Caja'
								handleChange={handleChange}
								handleBlur={handleBlur}
								name='box'
								type='number'
								value={form.box}
							/>
							{!error.device && error.box && <FormError>{error.box}</FormError>}
							<TextInput
								label='Descripción'
								handleChange={handleChange}
								handleBlur={handleBlur}
								name='description'
								type='text'
								multiline={true}
								value={form.description}
							/>
							{!error.box && error.description && (
								<FormError>{error.description}</FormError>
							)}
							<div className='d-flex justify-content-center align-items-end ps-2'>
								<div>
									<TextInput
										label='Precio'
										handleChange={handleChange}
										handleBlur={handleBlur}
										name='price'
										type='number'
										width='40ch'
										value={form.price}
									/>
									{!error.description && error.price && (
										<FormError>{error.price}</FormError>
									)}
								</div>
								<div>
									<select
										value={form.currency}
										name='currency'
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
						</div>
					</div>
				</div>
				<ModalButtons handleClose={handleClose} />
			</form>
		</div>
	);
};
export default AddRepairsForm;
