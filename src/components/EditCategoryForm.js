import React from 'react';
import TextInput from './TextInput';
import { FormError } from './FormError';
import { useEditForm } from '@/hooks/useEditForm';
import ModalEditButtons from './ModalEditButtons';

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

const EditCategoryForm = ({ handleClose, category }) => {
	const initialForm = {
		category: `${
			category.category[0].toUpperCase() + category.category.substring(1)
		}`,
	};

	const url = [`http://127.0.0.1:5000/categories/${category._id}`];

	const { form, error, handleChange, handleBlur, handleSubmit } = useEditForm(
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
						label='Editar Categoría'
						name='category'
						width='43ch'
						value={form.category.toLowerCase()}
					/>
					{error.category && (
						<FormError className='text-center'>{error.category}</FormError>
					)}
				</div>
				<ModalEditButtons handleClose={handleClose} />
			</form>
		</>
	);
};

export default EditCategoryForm;
