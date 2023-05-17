'use client';

import SnackBarContext from '@/context/SnackBarContext';
import { helpHttp } from '@/helpers/helpHttp';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import Cookies from 'js-cookie';
import crypto from 'crypto';

export const useSessionForm = (initialForm, url) => {
	const [form, setForm] = useState(initialForm);
	const [error, setError] = useState(false);

	const router = useRouter();

	const { setOpenSuccessSnack, setOpenErrorSnack, setMsg } =
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
	};

	const handleSubmit = async (e) => {
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
					const secret = 'your-secret-password';
					const objectToHash = { res };
					const stringifiedObject = JSON.stringify(objectToHash);
					const hash = crypto
						.createHmac('sha256', secret)
						.update(stringifiedObject)
						.digest('hex');
					Cookies.set('currentUser', hash);
					router.push('/managment/administration/services/repairs');
					setOpenSuccessSnack(true);
					setTimeout(() => {
						setOpenSuccessSnack(false);
						setMsg('');
					}, 3000);
				}
			});
	};

	return {
		form,
		error,
		handleChange,
		handleBlur,
		handleSubmit,
	};
};
