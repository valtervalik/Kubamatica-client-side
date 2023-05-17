import { useEditForm } from '@/hooks/useEditForm';
import TextInput from './TextInput';
import { FormError } from './FormError';
import Selector from './Selector';
import ModalEditButtons from './ModalEditButtons';

const validateForm = (form) => {
	let error = {};
	let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	let regexUsername = /^[a-z]{1,15}$/;
	let regexPhone = /^5\d{7}$/;
	let regexNumber = /^\d+$/;
	let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.][a-z]{2,}(\.[a-z]{2,})?$/;
	let regexDescription = /^.{1,155}$/;
	let regexInput = /^.{1,55}$/;
	let regexPassword =
		/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

	if (!form.fullname.trim()) {
		error.fullname = `El campo 'Nombre y Apellidos' es requerido`;
	} else if (!regexName.test(form.fullname.trim())) {
		error.fullname = `El campo 'Nombre y Apellidos' solo debe estar compuesto por letras`;
	}

	if (!form.phone.trim()) {
		error.phone = `El campo 'Teléfono' es requerido`;
	} else if (!regexPhone.test(form.phone.trim())) {
		error.phone = `El campo 'Teléfono' solo debe estar compuesto por un 5 seguido de 7 dígitos`;
	}

	if (!form.username.trim()) {
		error.username = `El campo 'Nombre de Usuario' es requerido`;
	} else if (!regexUsername.test(form.username.trim())) {
		error.username = `El campo 'Nombre de Usuario' solo debe estar compuesto por letras en minúscula y tener un máximo de 15 caracteres`;
	}

	if (!form.email.trim()) {
		error.email = `El campo 'Email' es requerido`;
	} else if (!regexEmail.test(form.email.trim())) {
		error.email = `El campo 'Email' debe ser un email válido`;
	}

	if (!form.role.trim()) {
		error.role = `El campo 'Rol' es requerido`;
	}

	return error;
};

const EditUserForm = ({ handleClose, user }) => {
	const url = `http://127.0.0.1:5000/users/${user._id}`;

	const initialForm = {
		fullname: `${user.fullname}`,
		phone: `${user.phone}`,
		username: `${user.username}`,
		email: `${user.email}`,
		role: `${user.role}`,
	};

	const { form, error, handleChange, handleBlur, handleSubmit } = useEditForm(
		initialForm,
		validateForm,
		url,
		handleClose
	);

	return (
		<div>
			<form onSubmit={handleSubmit} action='/admin/users'>
				<TextInput
					value={form.fullname}
					handleChange={handleChange}
					handleBlur={handleBlur}
					label='Nombre y Apellidos'
					type='text'
					name='fullname'
				/>
				{error.fullname && <FormError>{error.fullname}</FormError>}
				<TextInput
					value={form.phone}
					handleChange={handleChange}
					handleBlur={handleBlur}
					label='Teléfono'
					type='text'
					name='phone'
				/>
				{!error.fullname && error.phone && <FormError>{error.phone}</FormError>}
				<TextInput
					value={form.username}
					handleChange={handleChange}
					handleBlur={handleBlur}
					label='Nombre de Usuario'
					type='text'
					name='username'
				/>
				{!error.phone && error.username && (
					<FormError>{error.username}</FormError>
				)}
				<TextInput
					value={form.email}
					handleChange={handleChange}
					handleBlur={handleBlur}
					label='Email'
					type='email'
					name='email'
				/>
				{!error.username && error.email && <FormError>{error.email}</FormError>}
				<Selector
					value={form.role}
					handleChange={handleChange}
					handleBlur={handleBlur}
					label='Rol'
					name={'role'}
					options={[
						{
							option: 'Dependiente',
							value: 'Dependiente',
						},
						{
							option: 'Administrador',
							value: 'Administrador',
						},
					]}
				/>
				{!error.email && error.role && <FormError>{error.role}</FormError>}

				<ModalEditButtons handleClose={handleClose} />
			</form>
		</div>
	);
};

export default EditUserForm;
