import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextInput({
	label,
	type,
	name,
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
					'& textarea': { color: 'azure' },
				}}
				label={label}
				variant='standard'
				multiline={isMultiline}
				maxRows={4}
				type={type}
				name={name}
			/>
		</Box>
	);
}
