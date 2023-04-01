import React from 'react';
import TextInput from './TextInput';
import ModalButtons from './ModalButtons';

const AddCategoryForm = ({ handleClose }) => {
	return (
		<form action='/admin/inventory/components'>
			<div className='d-flex justify-content-center'>
				<TextInput label='Nueva Categoría' name='category' width='43ch' />
			</div>
			<ModalButtons handleClose={handleClose} />
		</form>
	);
};

export default AddCategoryForm;
