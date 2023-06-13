import TextInput from './TextInput';
import { FormError } from './FormError';
import { useEditForm } from '@/hooks/useEditForm';
import ModalEditButtons from './ModalEditButtons';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
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

	if (!form.warranty.trim()) {
		error.warranty = `El campo 'Garantía' es requerido`;
	} else if (!regexNumber.test(form.warranty.trim())) {
		error.warranty = `El campo 'Garantía' debe ser un número entero`;
	} else if (form.warranty < 0) {
		error.warranty = `El campo 'Garantía' debe ser mayor o igual a cero`;
	}

	if (!form.price.trim()) {
		error.price = `El campo 'Precio' es requerido`;
	} else if (form.price < 0) {
		error.price = `El campo 'Precio' debe ser mayor o igual a cero`;
	}

	return error;
};

const EditSellForm = ({ handleClose, sell }) => {
	const [value, setValue] = useState(
		dayjs(`${sell.date.month + 1}-${sell.date.day}-${sell.date.year}`)
	);

	const url = `http://127.0.0.1:5000/sells/${sell._id}`;

	const initialForm = {
		client: `${sell.client}`,
		phone: `${sell.phone}`,
		technic: `${sell.technic}`,
		warranty: `${sell.warranty}`,
		date: {
			year: sell.date.year,
			month: sell.date.month,
			day: sell.date.day,
			dayOfWeek: sell.date.dayOfWeek,
		},
		price: `${sell.price}`,
		currency: `${sell.currency}`,
	};

	const { form, error, handleChange, handleBlur, handleSubmit } = useEditForm(
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
			<form onSubmit={handleSubmit} action='/admin/services/sells' noValidate>
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

							<TextInput
								handleChange={handleChange}
								handleBlur={handleBlur}
								label='Garantía (días)'
								name='warranty'
								type='number'
								value={form.warranty}
							/>
							{!error.technic && error.warranty && (
								<FormError>{error.warranty}</FormError>
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
									{!error.warranty && error.price && (
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
							<BasicDatePicker value={value} setValue={setValue} />
						</div>
					</div>
				</div>
				<ModalEditButtons handleClose={handleClose} />
			</form>
		</div>
	);
};
export default EditSellForm;
