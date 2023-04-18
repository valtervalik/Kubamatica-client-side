'use client';

import SnackBarContext from '@/context/SnackBarContext';
import { helpHttp } from '@/helpers/helpHttp';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';

export const useSessionForm = (initialForm, validateForm, url) => {
	const [form, setForm] = useState(initialForm);
	const [error, setError] = useState({});

	const router = useRouter();

	const { setOpenSuccessSnack, setOpenErrorSnack, setMsg, msg } =
		useContext(SnackBarContext);

	const submitData = async (url, form) => {
		await helpHttp()
			.post(url, {
				body: form,
				headers: { 'content-type': 'application/json' },
			})
			.then((res) => {
				if (res.err) {
					setMsg('Error');
				} else {
					setMsg(res.message);
				}
			});
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
				if (msg === 'Error') {
					setMsg('Usuario o contraseña incorrectos');
					setOpenErrorSnack(true);
					setTimeout(() => {
						setOpenErrorSnack(false);
						setMsg('');
						setError({});
					}, 3000);
				} else {
					router.push('managment/administration/services/repairs');
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
			setOpenErrorSnack(true);
			setTimeout(() => {
				setOpenErrorSnack(false);
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
