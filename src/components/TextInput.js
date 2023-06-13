import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextInput({
	handleChange,
	handleBlur,
	handleFocus,
	handleKeyDown,
	label,
	type,
	name,
	disabled,
	value,
	multiline,
	width = '47ch',
	fontSize = '16px',
	focused,
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
					'& label': {
						'-webkit-text-fill-color': '#0066cc',
					},
					'& input': { color: 'azure' },
					'& input:autofill': {
						WebkitTextFillColor: 'azure',
						WebkitBoxShadow: '0 0 0 20px #000814 inset',
					},
					'& .MuiInputBase-input.MuiInput-input.Mui-disabled': {
						'-webkit-text-fill-color': 'gray',
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
				onFocus={handleFocus}
				onChange={handleChange}
				onBlur={handleBlur}
				onKeyDown={handleKeyDown}
				disabled={disabled}
				required
				autoFocus={focused}
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
