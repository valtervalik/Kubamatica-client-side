'use client';

import SnackBarContext from '@/context/SnackBarContext';
import { helpHttp } from '@/helpers/helpHttp';
import { useContext, useState } from 'react';

export const useForm = (initialForm, validateForm, url, handleClose) => {
	const [form, setForm] = useState(initialForm);
	const [error, setError] = useState({});

	const { setOpenSuccessSnack, setOpenWarningSnack, setMsg } =
		useContext(SnackBarContext);

	const submitData = async (url, form) => {
		await helpHttp()
			.post(url, {
				body: form,
				headers: { 'content-type': 'application/json' },
			})
			.then((res) => setMsg(res.message));
	};

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
	const handleSubmit = (e) => {
		if (Object.keys(error).length === 0) {
			e.preventDefault();
			setForm(form);

			submitData(url, form).then(() => {
				handleClose();
				setOpenSuccessSnack(true);
				setTimeout(() => {
					setOpenSuccessSnack(false);
					setMsg('');
				}, 3000);
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
