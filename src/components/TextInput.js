import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextInput({
	handleChange,
	handleBlur,
	label,
	type,
	name,
	disabled,
	value,
	multiline,
	width = '47ch',
	fontSize = '16px',
}) {
	const isMultiline = multiline;
	return (
		<Box
			sx={{
				'& > :not(style)': { m: 1, width: { width } },
			}}
			noValidate
			autoComplete='off'>
			<TextField
				sx={{
					'& label': {
						color: '#0066cc',
						fontWeight: 'bold',
						fontSize: fontSize,
					},
					'& input': { color: 'azure' },
					'& input:autofill': {
						WebkitTextFillColor: 'azure',
						WebkitBoxShadow: '0 0 0 20px #000814 inset',
					},
					'& textarea': { color: 'azure' },
				}}
				label={label}
				variant='standard'
				multiline={isMultiline}
				maxRows={4}
				type={type}
				name={name}
				value={value}
				onChange={handleChange}
				onBlur={handleBlur}
				disabled={disabled}
				required
				inputProps={
					type === 'number'
						? { min: 0 }
						: type === 'text' && !isMultiline
						? { maxLength: 55 }
						: {}
				}
			/>
		</Box>
	);
}
