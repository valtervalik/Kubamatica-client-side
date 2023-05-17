'use client';
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker({ value, setValue }) {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
				label='Fecha'
				name='date'
				value={value}
				onChange={(newValue) => {
					setValue(newValue);
				}}
				slotProps={{
					textField: {
						helperText: 'MM/DD/AAAA',
						FormHelperTextProps: {
							sx: {
								color: 'gray',
							},
						},
					},
				}}
				sx={{
					'& .MuiInputBase-input': {
						color: 'azure',
					},
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: '#0066cc',
					},
					'& .MuiFormLabel-root': {
						color: '#0066cc',
					},
					'& .MuiPickersDay-day': {
						color: 'azure',
					},
					'& .MuiSvgIcon-root': {
						color: 'azure',
					},
					marginTop: 2,
				}}
			/>
		</LocalizationProvider>
	);
}
