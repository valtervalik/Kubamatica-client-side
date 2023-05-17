'use client';
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function HelperText() {
	const [value, setValue] = React.useState(dayjs());

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
				label='Fecha'
				value={value}
				onChange={(newValue) => {
					setValue(newValue);
				}}
				slotProps={{
					textField: {
						helperText: 'MM/DD/YYYY',
						FormHelperTextProps: {
							sx: {
								color: 'azure',
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
