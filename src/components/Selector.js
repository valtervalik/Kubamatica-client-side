'use client';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selector({
	label,
	name,
	options,
	width = '47ch',
	fontSize = '16px',
}) {
	return (
		<div>
			<FormControl variant='standard' sx={{ m: 1, width: width }}>
				<InputLabel
					style={{ color: '#0066cc', fontSize: fontSize, fontWeight: 'bold' }}
					id='demo-simple-select-standard-label'>
					{label}
				</InputLabel>
				<Select
					name={name}
					style={{ color: 'azure' }}
					labelId='demo-simple-select-standard-label'
					id='demo-simple-select-standard'
					defaultValue={''}
					label={label}
					required>
					{options.map(({ option, value }) => (
						<MenuItem key={value} value={value}>
							{option}
						</MenuItem>
					))}
					{/* <MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem> */}
				</Select>
			</FormControl>
		</div>
	);
}
