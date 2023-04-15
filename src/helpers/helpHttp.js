'use client';
export const helpHttp = () => {
	const customFetch = (endPoint, options) => {
		const defaultHeader = {
			accept: 'application/json',
		};

		//para abortar la carga en caso de que el servidor no responda
		const controller = new AbortController();
		options.signal = controller.signal;

		//definiendo opciones por defecto
		options.method = options.method || 'GET';
		options.chache = options.cache || 'no-store';
		options.headers = options.headers
			? { ...defaultHeader, ...options.headers }
			: defaultHeader;

		options.body = JSON.stringify(options.body) || false;

		//ya que en la peticion fetch no se debe mandar el body vacio o falso
		if (!options.body) delete options.body;

		// console.log(options);
		//aborta la carga de datos si el servidor no responde en 3 segundos
		setTimeout(() => controller.abort(), 3000);

		//Haciendo un fetch hacia la url correspondiente
		return fetch(endPoint, options)
			.then((res) =>
				res.ok
					? res.json()
					: Promise.reject({
							err: true,
							status: res.status || '00',
							statusText: res.statusText || 'Ocurrio un Error',
					  })
			)
			.catch((err) => err);
	};

	const get = (url, options = {}) => customFetch(url, options);

	const post = (url, options = {}) => {
		options.method = 'POST';
		return customFetch(url, options);
	};

	const put = (url, options = {}) => {
		options.method = 'PUT';
		return customFetch(url, options);
	};

	const del = (url, options = {}) => {
		options.method = 'DELETE';
		return customFetch(url, options);
	};

	return {
		get,
		post,
		put,
		del,
	};
};
