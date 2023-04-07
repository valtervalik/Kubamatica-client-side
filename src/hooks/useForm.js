'use client';

import SnackBarContext from '@/context/SnackBarContext';
import { useContext, useState } from 'react';

export const useForm = (initialForm, validateForm) => {
	const [form, setForm] = useState(initialForm);
	const [error, setError] = useState({});

	const { setOpenSuccessSnack, setOpenWarningSnack } =
		useContext(SnackBarContext);

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
			setForm(form);
			setOpenSuccessSnack(true);
			setTimeout(() => {
				setOpenSuccessSnack(false);
			}, 3000);
		} else {
			e.preventDefault();
			setError(validateForm(form));
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
