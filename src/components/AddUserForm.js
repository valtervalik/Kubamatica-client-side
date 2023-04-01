import ModalButtons from './ModalButtons';
import TextInput from './TextInput';

const AddUserForm = ({ handleClose }) => {
	return (
		<div>
			<form action='/admin/users'>
				<TextInput label='Nombre y Apellidos' type='text' name='name' />
				<TextInput label='Teléfono' type='text' name='phone' />
				<TextInput label='Nombre de Usuario' type='text' name='username' />
				<TextInput label='Email' type='email' name='email' />
				<TextInput label='Rol' type='text' name='rol' />
				<TextInput label='Contraseña' type='password' name='password' />
				<TextInput
					label='Confirmar Contraseña'
					type='password'
					name='cpassword'
				/>
				<ModalButtons handleClose={handleClose} />
			</form>
		</div>
	);
};

export default AddUserForm;
