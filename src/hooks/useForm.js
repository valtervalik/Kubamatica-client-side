'use client';

import { useState } from 'react';

export const useForm = (initialForm, validateForm) => {
	const [form, setForm] = useState(initialForm);
	const [error, setError] = useState({});

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
		} else {
			e.preventDefault();
			setError(validateForm(form));
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
