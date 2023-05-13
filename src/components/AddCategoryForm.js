import React from 'react';
import TextInput from './TextInput';
import ModalButtons from './ModalButtons';
import { useForm } from '@/hooks/useForm';
import { FormError } from './FormError';

const initialForm = {
	category: '',
};

const validateForm = (form) => {
	let error = {};
	let regexInput = /^.{1,55}$/;

	if (!form.category.trim()) {
		error.category = `El campo 'Categoría' es requerido`;
	} else if (!regexInput.test(form.category.trim())) {
		error.category = `El campo 'Categoría' debe tener un máximo de 55 caracteres`;
	}

	return error;
};

const url = ['http://127.0.0.1:5000/categories'];

const AddCategoryForm = ({ handleClose }) => {
	const { form, error, handleChange, handleBlur, handleSubmit } = useForm(
		initialForm,
		validateForm,
		url,
		handleClose
	);

	return (
		<>
			<form onSubmit={handleSubmit} action='/admin/inventory/components'>
				<div className='d-flex flex-column justify-content-center'>
					<TextInput
						handleChange={handleChange}
						handleBlur={handleBlur}
						label='Nueva Categoría'
						name='category'
						width='43ch'
						value={form.category.toLowerCase()}
					/>
					{error.category && (
						<FormError className='text-center'>{error.category}</FormError>
					)}
				</div>
				<ModalButtons handleClose={handleClose} />
			</form>
		</>
	);
};

export default AddCategoryForm;
