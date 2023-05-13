import { useEditForm } from '@/hooks/useEditForm';
import { FormError } from './FormError';
import ModalEditButtons from './ModalEditButtons';
import TextInput from './TextInput';

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
		error.warranty = `El campo 'Garantía' debe ser mayor o igual a cero`;
	}

	if (!form.device.trim()) {
		error.device = `El campo 'Equipo' es requerido`;
	} else if (!regexName.test(form.device.trim())) {
		error.device = `El campo 'Equipo' solo debe estar compuesto por letras`;
	}

	if (!form.box.trim()) {
		error.box = `El campo 'No. Caja' es requerido`;
	} else if (!regexNumber.test(form.box.trim())) {
		error.box = `El campo 'No. Caja' debe ser mayor o igual a cero`;
	}

	if (!form.description.trim()) {
		error.description = `El campo 'Descripción' es requerido`;
	} else if (!regexDescription.test(form.description.trim())) {
		error.description = `El campo 'Descripción' debe tener un máximo de 155 caracteres`;
	}

	if (!form.price.trim()) {
		error.price = `El campo 'Precio' es requerido`;
	} else if (!regexNumber.test(form.price.trim())) {
		error.price = `El campo 'Precio' debe ser mayor o igual a cero`;
	}

	return error;
};

const EditRepairsForm = ({ handleClose, repair }) => {
	const url = [`http://127.0.0.1:5000/repairs/${repair._id}`];

	const initialForm = {
		client: `${repair.client}`,
		phone: `${repair.phone}`,
		technic: `${repair.technic}`,
		warranty: `${repair.warranty}`,
		device: `${repair.device}`,
		box: `${repair.box}`,
		description: `${repair.description}`,

		price: `${repair.price}`,
		currency: `${repair.currency}`,
	};

	const { form, error, handleChange, handleBlur, handleSubmit } = useEditForm(
		initialForm,
		validateForm,
		url,
		handleClose
	);

	return (
		<div>
			<form onSubmit={handleSubmit} action='/admin/services/repairs'>
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
								label='Garantía'
								handleChange={handleChange}
								handleBlur={handleBlur}
								name='warranty'
								type='number'
								value={form.warranty}
							/>
							{!error.technic && error.warranty && (
								<FormError>{error.warranty}</FormError>
							)}
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
				<ModalEditButtons handleClose={handleClose} />
			</form>
		</div>
	);
};
export default EditRepairsForm;
