'use client';
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import AdminContext, { AdminProvider } from '@/context/AdminContext';
import { useContext } from 'react';

export default function AdminSwitch() {
	const { admin, handleChange } = useContext(AdminContext);
	return (
		<FormGroup>
			<FormControlLabel
				control={<Switch onChange={handleChange} checked={admin} />}
				label='admin'
			/>
		</FormGroup>
	);
}
