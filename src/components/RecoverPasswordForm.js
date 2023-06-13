import React from 'react';
import TextInput from './TextInput';
import { FormError } from './FormError';
import ModalEditButtons from './ModalEditButtons';
import { useRecoverForm } from '@/hooks/useRecoverForm';

const initialForm = {
	email: '',
};

const validateForm = (form) => {
	let error = {};

	let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.][a-z]{2,}(\.[a-z]{2,})?$/;

	if (!form.email.trim()) {
		error.email = `El campo 'Email' es requerido`;
	} else if (!regexEmail.test(form.email.trim())) {
		error.email = `El campo 'Email' debe ser un email válido`;
	}

	return error;
};

const url = 'http://127.0.0.1:5000/users/recoverpassword';

const RecoverPasswordForm = ({ handleClose }) => {
	const { form, error, handleChange, handleBlur, handleSubmit, handleFocus } =
		useRecoverForm(initialForm, validateForm, url, handleClose);

	return (
		<>
			<form
				onSubmit={handleSubmit}
				action='/admin/inventory/components'
				noValidate>
				<div className='d-flex flex-column justify-content-center'>
					<TextInput
						value={form.email}
						handleChange={handleChange}
						handleBlur={handleBlur}
						handleFocus={handleFocus}
						label='Email'
						type='email'
						name='email'
						focused={true}
					/>
					{error.email && <FormError>{error.email}</FormError>}
				</div>
				<ModalEditButtons handleClose={handleClose} />
			</form>
		</>
	);
};

export default RecoverPasswordForm;
