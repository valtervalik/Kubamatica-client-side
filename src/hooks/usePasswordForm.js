'use client';

import SnackBarContext from '@/context/SnackBarContext';
import { helpHttp } from '@/helpers/helpHttp';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
// import Cookies from 'js-cookie';

export const usePasswordForm = (initialForm, validateForm, url) => {
	const [form, setForm] = useState(initialForm);
	const [error, setError] = useState(false);

	const router = useRouter();

	const {
		setOpenSuccessSnack,
		setOpenWarningSnack,
		setOpenErrorSnack,
		setMsg,
	} = useContext(SnackBarContext);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const handleBlur = (e) => {
		handleChange(e);
		setError(validateForm(form));
	};

	const handleSubmit = async (e) => {
		if (Object.keys(error).length === 0) {
			e.preventDefault();
			setForm(form);

			await helpHttp()
				.post(url, {
					body: form,
					headers: { 'content-type': 'application/json' },
					Credential: true,
				})
				.then((res) => {
					if (res.err) {
						setMsg('Usuario o contraseña incorrectos');
						setOpenErrorSnack(true);
						setTimeout(() => {
							setOpenErrorSnack(false);
							setMsg('');
						}, 3000);
					} else {
						setMsg(res.message);
						// localStorage.setItem('currentUser', JSON.stringify(res));
						// Cookies.set('currentUser', res);
						router.push('/managment/session/login');
						setOpenSuccessSnack(true);
						setTimeout(() => {
							setOpenSuccessSnack(false);
							setMsg('');
						}, 3000);
					}
				});
		} else {
			e.preventDefault();
			setError(validateForm(form));
			setMsg('Por favor rellene el formulario correctamente');
			setOpenWarningSnack(true);
			setTimeout(() => {
				setOpenWarningSnack(false);
				setMsg('');
			}, 3000);
		}
	};

	return {
		form,
		error,
		handleChange,
		handleBlur,
		handleSubmit,
	};
};
