import { useForm } from '@/hooks/useForm';
import ModalButtons from './ModalButtons';
import TextInput from './TextInput';
import MySnackbar from './MySnackBar';
import { FormError } from './FormError';
import Selector from './Selector';

const initialForm = {
	name: '',
	phone: '',
	username: '',
	email: '',
	role: '',
	password: '',
	confirmpassword: '',
};

const validateForm = (form) => {
	let error = {};
	let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	let regexUsername = /^[a-z]{1,15}$/;
	let regexPhone = /^5\d{7}$/;
	let regexNumber = /^\d+$/;
	let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
	let regexDescription = /^.{1,155}$/;
	let regexInput = /^.{1,55}$/;
	let regexPassword =
		/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

	if (!form.name.trim()) {
		error.name = `El campo 'Nombre y Apellidos' es requerido`;
	} else if (!regexName.test(form.name.trim())) {
		error.name = `El campo 'Nombre y Apellidos' solo debe estar compuesto por letras`;
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

	if (!form.password.trim()) {
		error.password = `El campo 'Contraseña' es requerido`;
	} else if (!regexPassword.test(form.password.trim())) {
		error.password = `El campo 'Contraseña' debe tener más de 8 caracteres y tener al menos una mayúscula, un número y un caracter especial`;
	}

	if (!form.confirmpassword.trim()) {
		error.confirmpassword = `El campo 'Confirmar Contraseña' es requerido`;
	} else if (form.password !== form.confirmpassword) {
		error.confirmpassword = `Las contraseñas no coinciden`;
	}

	return error;
};
const AddUserForm = ({ handleClose }) => {
	const {
		form,
		error,
		openWarningSnack,
		openSuccessSnack,
		handleChange,
		handleBlur,
		handleSubmit,
	} = useForm(initialForm, validateForm);

	return (
		<div>
			<form onSubmit={handleSubmit} action='/admin/users'>
				<TextInput
					value={form.name}
					handleChange={handleChange}
					handleBlur={handleBlur}
					label='Nombre y Apellidos'
					type='text'
					name='name'
				/>
				{error.name && <FormError>{error.name}</FormError>}
				<TextInput
					value={form.phone}
					handleChange={handleChange}
					handleBlur={handleBlur}
					label='Teléfono'
					type='text'
					name='phone'
				/>
				{!error.name && error.phone && <FormError>{error.phone}</FormError>}
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
							value: 'clerk',
						},
						{
							option: 'Administrador',
							value: 'manager',
						},
					]}
				/>
				{!error.email && error.role && <FormError>{error.role}</FormError>}
				<TextInput
					value={form.password}
					handleChange={handleChange}
					handleBlur={handleBlur}
					label='Contraseña'
					type='password'
					name='password'
				/>
				{!error.role && error.password && (
					<FormError>{error.password}</FormError>
				)}
				<TextInput
					value={form.confirmpassword}
					handleChange={handleChange}
					handleBlur={handleBlur}
					label='Confirmar Contraseña'
					type='password'
					name='confirmpassword'
				/>
				{!error.password && error.confirmpassword && (
					<FormError>{error.confirmpassword}</FormError>
				)}
				<ModalButtons handleClose={handleClose} />
			</form>
			<MySnackbar
				severity={'warning'}
				text={'Por favor rellene el formulario correctamente'}
				openWarningSnack={openWarningSnack}
			/>
			<MySnackbar
				severity={'success'}
				text={'Usuario añadido exitosamente'}
				openSuccessSnack={openSuccessSnack}
			/>
		</div>
	);
};

export default AddUserForm;
