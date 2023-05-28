'use client';

import SnackBarContext from '@/context/SnackBarContext';
import { helpHttp } from '@/helpers/helpHttp';
import { useContext, useState } from 'react';

export const useEditForm = (initialForm, validateForm, url, handleClose) => {
	const [form, setForm] = useState(initialForm);
	const [error, setError] = useState({});

	const {
		setOpenSuccessSnack,
		setOpenErrorSnack,
		setOpenWarningSnack,
		setMsg,
		setLoading,
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

			setLoading(true);
			handleClose();
			await helpHttp()
				.put(url, {
					body: form,
					headers: { 'content-type': 'application/json' },
				})
				.then((res) => {
					if (res.error) {
						setMsg(res.error);
						setOpenErrorSnack(true);
						setTimeout(() => {
							setOpenErrorSnack(false);
							setMsg('');
						}, 3000);
					} else {
						setMsg(res.message);
						setOpenSuccessSnack(true);
						setTimeout(() => {
							setOpenSuccessSnack(false);
							setMsg('');
						}, 3000);
					}
				});
			setLoading(false);
		} else {
			e.preventDefault();
			setError(validateForm(form));
			setMsg('Por favor rellene el formulario correctamente');
			setOpenWarningSnack(true);
			setTimeout(() => {
				setOpenWarningSnack(false);
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
